import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {CITIES} from '../../const';
import CitiesItem from './cities-item';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CitiesItem', () => {
  const store = mockStore();
  const city = CITIES[0];

  it('should render correctly', () => {
    const activeCity = CITIES[0];
    const fakeOnActiveCity = jest.fn();

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
});
