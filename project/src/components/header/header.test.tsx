import {Provider} from 'react-redux';
import {Action} from 'redux';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';
import {AppRoute, AuthStatus} from '../../const';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const history = createMemoryHistory();

describe('Component: Header', () => {

  it('should render correctly if this is main page and  user does not login in', () => {
    const store = mockStore({
      AUTH: {status: AuthStatus.NoAuth},
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('.header__nav')).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render correctly if this is not login page and user login in', () => {
    const store = mockStore({
      AUTH: {status: AuthStatus.Auth},
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('.header__nav')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should redirect to login url when user clicked to "Sign in"', () => {
    const store = mockStore({
      AUTH: {status: AuthStatus.NoAuth},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/login" exact>
              <h1>This is login page</h1>
            </Route>
            <Route>
              <Header/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is login page/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Sign in/i));
    expect(screen.queryByText(/Login page/i)).toBeInTheDocument();
  });

  it('should render correctly if it is login page and user does not login in', () => {
    const store = mockStore({
      AUTH: {status: AuthStatus.NoAuth},
    });

    history.push(AppRoute.Login);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('.header__nav')).not.toBeInTheDocument();
  });

  it('should logout if user click "Sign out"', () => {
    const store = mockStore({
      AUTH: {status: AuthStatus.Auth},
    });

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

});
