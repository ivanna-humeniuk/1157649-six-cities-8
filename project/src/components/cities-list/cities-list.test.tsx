import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {CITIES} from '../../const';
import CitiesList from './cities-list';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: CitiesList', () => {
  const store = mockStore();
  const city = CITIES[0];
  const activeCity = CITIES[1];
  const fakeOnActiveCity = jest.fn();

  it('should render correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList activeCity={activeCity} cities={CITIES} onActivateCity={fakeOnActiveCity}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(screen.getByText(activeCity)).toBeInTheDocument();
    expect(container.querySelector('.locations__list')).toBeInTheDocument();
  });

});
