import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import FavoritesScreen from './favorites-screen';
import {AuthStatus, NameSpace} from '../../const';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';
import {mockOffers} from '../../mocks/offers';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();

describe('Component: FavoritesScreen', () => {

  it('should render correctly', () => {
    const store = mockStore({
      [NameSpace.offers]: {
        offers: mockOffers,
      },
      [NameSpace.favorite]: {
        isLoadingFavorite: false,
      },
      [NameSpace.auth]: {
        status: AuthStatus.Auth,
      },
    });
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesScreen/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(container.querySelector('.favorites__list')).toBeInTheDocument();
  });

  it('should render correctly if favorite lists is empty', () => {
    const store = mockStore({
      [NameSpace.offers]: {
        offers: [],
      },
      [NameSpace.favorite]: {
        isLoadingFavorite: false,
      },
      [NameSpace.auth]: {
        status: AuthStatus.Auth,
      },
    });
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesScreen/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(container.querySelector('.favorites--empty')).toBeInTheDocument();
  });
});
