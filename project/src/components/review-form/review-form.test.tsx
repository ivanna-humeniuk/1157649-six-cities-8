import {Provider} from 'react-redux';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import ReviewForm from './review-form';
import {mockPostReview} from '../../mocks/reviews';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];

export const mockAPI = new MockAdapter(api);
export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const history = createMemoryHistory();

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const INPUT_STARS = 5;

    const store = mockStore({
      OFFER: {
        review: mockPostReview,
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue(mockPostReview.comment);
    expect(container.querySelectorAll('.form__rating-input').length).toBe(INPUT_STARS);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
