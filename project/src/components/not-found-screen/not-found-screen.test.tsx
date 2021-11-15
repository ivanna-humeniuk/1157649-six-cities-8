import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import NotFoundScreen from './not-found-screen';
import {AuthStatus} from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: NotFoundScreen', () => {
  const store = mockStore({
    AUTH: {
      status: AuthStatus.NoAuth,
      info: null,
      isLoading: false,
    },
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundScreen/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Return to Home page/i)).toBeInTheDocument();
  });

  it('should go to the main page when user click on "Return to Home page"', () => {

    history.push('/non-existent-route');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <NotFoundScreen/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(/Return to Home page/i));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });

});
