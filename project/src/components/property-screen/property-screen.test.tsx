import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';
import {AuthStatus, NameSpace} from '../../const';
import {mockOffer, mockOffers} from '../../mocks/offers';
import {mockReview, mockReviews} from '../../mocks/reviews';
import PropertyScreen from './property-screen';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Component: RoomScreen', () => {
  const store = mockStore({
    [NameSpace.auth]: {
      status: AuthStatus.Auth,
    },
    [NameSpace.offer]: {
      offer : mockOffer,
      reviews: mockReviews,
      review: mockReview,
      nearbyList: mockOffers,
    },
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyScreen />
        </Router>
      </Provider>);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(container.querySelector('.near-places')).toBeInTheDocument();
    expect(container.querySelector('.property__container')).toBeInTheDocument();

  });
});


