import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Reviews from './reviews';
import {mockPostReview, mockReviews} from '../../mocks/reviews';
import {AuthStatus} from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Reviews', () => {
  const store = mockStore({
    OFFER: {
      reviews: mockReviews,
      review: mockPostReview,
    },
    AUTH: {
      status: AuthStatus.Auth,
    },
  });

  it('should render correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Reviews/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(container.querySelector('.reviews__amount')).toBeInTheDocument();
  });

});
