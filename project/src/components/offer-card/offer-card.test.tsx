import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import OfferCard from './offer-card';
import {mockOffer} from '../../mocks/offers';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: OfferCard', () => {
  const store = mockStore();

  const fakeOfferClasses = {
    article: 'cities__place-card',
    imageWrapper: 'cities__image-wrapper',
  };

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <OfferCard place={mockOffer} cardClasses={fakeOfferClasses}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(container.querySelector('.cities__place-card')).toBeInTheDocument();
  });
});
