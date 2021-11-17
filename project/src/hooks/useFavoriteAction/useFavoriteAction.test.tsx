import {renderHook} from '@testing-library/react-hooks';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {Provider} from 'react-redux';
import {AuthStatus} from '../../const';
import useFavoriteAction from './useFavoriteAction';
import {mockOffer} from '../../mocks/offers';
import {createAPI} from '../../services/api';
import {State} from '../../types/state';


const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

describe('Hook: useActivePoint', () => {

  it('should return function', () => {

    const OFFER_ID = 1;
    const store = mockStore({
      AUTH: {status: AuthStatus.NoAuth},
    });

    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const {result} = renderHook(() =>
      useFavoriteAction(mockOffer, OFFER_ID), {wrapper},
    );

    const handleBookmarkButtonClick = result.current;

    expect(result.current).toEqual(handleBookmarkButtonClick);
    expect(handleBookmarkButtonClick).toBeInstanceOf(Function);
  });
});
