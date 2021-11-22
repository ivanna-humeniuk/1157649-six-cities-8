import {Router} from 'react-router-dom';
import {Action} from 'redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MainScreen from './main-screen';
import {NameSpace, CITIES, SortOptions, AuthStatus} from '../../../const';
import {mockOffers} from '../../../mocks/offers';
import {createAPI} from '../../../services/api';
import {State} from '../../../types/state';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
export const mockAPI = new MockAdapter(api);
export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const history = createMemoryHistory();

describe('Component: MainScreen', () => {
  const store = mockStore({
    [NameSpace.Offers]: {
      offers: mockOffers,
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
    },
    [NameSpace.Auth]: {
      status: AuthStatus.Auth,
    },
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MainScreen/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(container.querySelector('.cities')).toBeInTheDocument();
  });
});
