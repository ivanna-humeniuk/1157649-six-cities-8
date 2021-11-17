import * as Redux from 'react-redux';
import {Provider} from 'react-redux';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form';
import {mockPostReview} from '../../mocks/reviews';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';
import {ActionType} from '../../types/actions';

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
  it('should render "ReviewForm" when user navigate to "offer/:id" url', () => {
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

  it('when the user click on stars the dispatch should be executed', () => {

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const store = mockStore({
      OFFER: {
        review: {
          comment: '',
          rating: 0,
        },
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>);

    const [oneStarRating] = container.querySelectorAll('.form__rating-input');
    userEvent.click(oneStarRating);
    expect(useDispatch).toBeCalledTimes(1);

    expect(dispatch).toHaveBeenNthCalledWith(1,  {
      type: ActionType.SetReview,
      payload: {
        comment: '',
        rating: 5,
      },
    });
  });

  it('when the user set comments the dispatch should be executed', () => {

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const store = mockStore({
      OFFER: {
        review: {
          comment: '',
          rating: 5,
        },
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>);

    userEvent.paste(screen.getByRole('textbox'), mockPostReview.comment);
    expect(useDispatch).toBeCalledTimes(1);

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.SetReview,
      payload: {
        comment: mockPostReview.comment,
        rating: 5,
      },
    });

  });

  it('when the user submit button the dispatch should be executed', () => {

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const store = mockStore({
      OFFER: {
        review: mockPostReview,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>);

    userEvent.click(screen.getByRole('button'));
    expect(useDispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalled();
  });

  it('when the user submit button the dispatch should not executed because the length of comment does not correct', () => {

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const store = mockStore({
      OFFER: {
        review: {
          comment: 'Perfect!',
          rating: 4,
        },
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>);

    userEvent.click(screen.getByRole('button'));
    expect(useDispatch).toBeCalledTimes(1);
    expect(dispatch).not.toBeCalled();
  });
});
