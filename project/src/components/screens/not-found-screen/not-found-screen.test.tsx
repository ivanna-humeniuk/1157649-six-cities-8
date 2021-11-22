import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import NotFoundScreen from './not-found-screen';
import {AuthStatus} from '../../../const';

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

});
