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

    expect(mockReviews).not.toHaveLength(10);
    const reviewsItems = container.querySelectorAll('.reviews__item');
    expect(reviewsItems).toHaveLength(10);
  });

  it('if there are less than 10 reviews, then component rendered same quantity', () => {
    const reviews = mockReviews.slice(0, 5);
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsList reviews={reviews}/>
        </Router>
      </Provider>,
    );

    const reviewsItems = container.querySelectorAll('.reviews__item');
    expect(reviewsItems).toHaveLength(5);
  });

});
