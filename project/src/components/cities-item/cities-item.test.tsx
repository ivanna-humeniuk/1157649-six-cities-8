import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {CITIES} from '../../const';
import CitiesItem from './cities-item';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CitiesItem', () => {
  const store = mockStore();
  const city = CITIES[0];
  const fakeOnActiveCity = jest.fn();

  it('should render correctly', () => {
    const activeCity = CITIES[0];

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesItem activeCity={activeCity} city={city} onActivateCity={fakeOnActiveCity}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).toBeInTheDocument();
  });

  it('should render correctly if user click on other city', () => {
    const activeCity = CITIES[1];

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesItem activeCity={activeCity} city={city} onActivateCity={fakeOnActiveCity}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).not.toBeInTheDocument();
  });

  it('should handler function if user choose city', () => {
    const activeCity = CITIES[0];

    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesItem activeCity={activeCity} city={city} onActivateCity={fakeOnActiveCity}/>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(city));
    expect(fakeOnActiveCity).toBeCalled();
  });
});
