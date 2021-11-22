import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginScreen from './login-screen';
import {AuthStatus, NameSpace} from '../../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LoginScreen', () => {
  it('should render "LoginScreen" when user navigate to "login" url', () => {
    history.push('/login');

    const store = mockStore({
      [NameSpace.Auth]: {
        status: AuthStatus.NoAuth,
        info: null,
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Email'), 'ivanna');
    userEvent.type(screen.getByPlaceholderText('Password'), '123456');

    expect(screen.getByDisplayValue(/ivanna/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
