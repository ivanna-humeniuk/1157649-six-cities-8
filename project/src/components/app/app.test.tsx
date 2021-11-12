import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getDefaultMiddleware} from "@reduxjs/toolkit";
import App from './app';
import {AppRoute, AuthStatus, CITIES, SortOptions} from '../../const';
import {offers} from '../../mocks/offers';
import {listings} from '../../mocks/listings';

const middlewares = getDefaultMiddleware();
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  offers: {
    city: CITIES[0],
    sortedOption: SortOptions.Popular,
    offers: offers,
    isLoadingStatus: false,
  },
  auth: {
    status: AuthStatus.Auth,
    info: null,
    isLoading: false,
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App listings={listings}/>
    </Router>
  </Provider>
);


describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  })
});

