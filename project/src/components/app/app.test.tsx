import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Action} from 'redux';
import {Provider} from 'react-redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createMemoryHistory} from 'history';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {AppRoute, AuthStatus, CITIES, SortOptions} from '../../const';
import {mockOffer, mockOffers} from '../../mocks/offers';
import {mockReviews} from '../../mocks/reviews';
import {createAPI} from '../../services/api';
import App from './app';
import {fakeUser} from '../../mocks/user';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];

export const mockAPI = new MockAdapter(api);
export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);


const store = mockStore({
  OFFERS: {
    city: CITIES[0],
    sortedOption: SortOptions.Popular,
    offers: mockOffers,
    isLoadingStatus: false,
  },
  AUTH: {
    status: AuthStatus.Auth,
    info: fakeUser,
    isLoading: false,
  },
  OFFER: {
    offer: mockOffer,
    nearbyList: mockOffers.slice(0, 3),
    loading: false,
    reviews: mockReviews,
    review: {
      comment: '',
      rating: 0,
    },
    isReviewLoading: false,
  },
  FAVORITE: {
    isLoadingFavorite: false,
  },
});


const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    const authScreenStore  = mockStore({
      AUTH: {
        status: AuthStatus.NoAuth,
      },
    });

    history.push(AppRoute.Login);
    render(
      <Provider store={authScreenStore}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    const {container} = render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(container.querySelector('.favorites__list')).toBeInTheDocument();
  });

  it('should render "PropertyScreen" when user navigate to "offer/:id"', () => {
    history.push(AppRoute.Room);
    render(fakeApp);
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Return to Home page')).toBeInTheDocument();
  });
});

