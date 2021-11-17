import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {mockReview} from '../../mocks/reviews';
import ReviewItem from './review-item';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ReviewItem', () => {
  const store = mockStore();

  it('should render correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewItem review={mockReview}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(container.querySelector('.reviews__item')).toBeInTheDocument();
  });

});
