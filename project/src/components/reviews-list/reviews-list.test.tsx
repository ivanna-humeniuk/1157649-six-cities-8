import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {mockReviews} from '../../mocks/reviews';
import ReviewsList from './reviews-list';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ReviewsList', () => {
  const store = mockStore();

  it('should render correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsList reviews={mockReviews}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.reviews__list')).toBeInTheDocument();
  });

  it('should render only 10 reviews', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsList reviews={mockReviews}/>
        </Router>
      </Provider>,
    );

    const reviewsItems = container.querySelectorAll('.reviews__item');
    expect(reviewsItems).toHaveLength(10);
  });

});
