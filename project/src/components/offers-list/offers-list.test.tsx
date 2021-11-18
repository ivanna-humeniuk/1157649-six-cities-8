import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {mockOffers} from '../../mocks/offers';
import OffersList from './offers-list';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: OffersList', () => {
  const store = mockStore();

  const fakeOfferClasses = {
    article: 'cities__place-card',
    imageWrapper: 'cities__image-wrapper',
  };

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList offers={mockOffers} cardClasses={fakeOfferClasses}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.places__list')).toBeInTheDocument();
    expect(container.querySelector('.cities__place-card')).toBeInTheDocument();
  });
});
