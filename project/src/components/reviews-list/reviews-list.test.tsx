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

});
