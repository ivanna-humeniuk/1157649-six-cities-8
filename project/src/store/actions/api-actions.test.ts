import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {createAPI} from '../../services/api';
import {APIRoute, AppRoute, AUTH_TOKEN_KEY_NAME, AuthStatus} from '../../const';
import {
  checkAuthAction,
  fetchFavoriteOffersAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction,
  loginAction,
  logoutAction,
  submitFavoriteAction,
  submitReviewAction
} from './api-actions';
import {
  redirectToRoute,
  requireLogout,
  setAuthInfo,
  setAuthLoading,
  setAuthStatus,
  setFavoriteOffers,
  setLoadingFavoriteOffers,
  setNearbyOffers,
  setOffer,
  setOfferLoading,
  setOffers,
  setOffersLoading,
  setReview,
  setReviewLoading,
  setReviews,
  toggleFavoriteOffer
} from './actions';
import {fakeUser, fakeAuth} from '../../mocks/user';
import {
  mockRawOffers,
  mockRawOffer,
  mockOffer,
  mockRawFavoriteOffers,
  mockRawFavoriteOffer
} from '../../mocks/offers';
import {adaptOfferToCamelCase, adaptReviewToCamelCase} from '../../utills/adapt-to-camel-case';
import {mockPostReview, mockRawReviews} from '../../mocks/reviews';


const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];

export const mockAPI = new MockAdapter(api);
export const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);


describe('Async actions', () => {

  it('should update authorization status to «auth»', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, fakeUser);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      setAuthInfo(fakeUser),
      setAuthStatus(AuthStatus.Auth),
    ]);
  });

  it('should login user and redirect to main page', async () => {
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, fakeUser);

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeAuth));

    expect(store.getActions()).toEqual([
      setAuthLoading(true),
      setAuthInfo(fakeUser),
      setAuthStatus(AuthStatus.Auth),
      redirectToRoute(AppRoute.Main),
      setAuthLoading(false),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, 'aXZhbm5hLmh1bWQGdtYWlsLmNvbQ==');
  });

  it('should logout user', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });

  it('should set all offers on main page', async () => {
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockRawOffers);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());
    const adaptMockOffers = mockRawOffers.map(adaptOfferToCamelCase)

    expect(store.getActions()).toEqual([
      setOffersLoading(true),
      setOffers(adaptMockOffers),
      setOffersLoading(false),
    ]);
  });

  it('should set offer by id', async () => {
    const OFFER_ID = 1
    mockAPI
      .onGet(`${APIRoute.Offers}/${OFFER_ID}`)
      .reply(200, mockRawOffer);

    const store = mockStore();
    await store.dispatch(fetchOfferAction(String(OFFER_ID)));
    const adaptMockOffer = adaptOfferToCamelCase(mockRawOffer);

    expect(store.getActions()).toEqual([
      setOfferLoading(true),
      setOffer(adaptMockOffer),
      setOfferLoading(false),
    ]);
  });

  it('should set nearby offers', async () => {
    const OFFER_ID = 1
    mockAPI
      .onGet(`${APIRoute.Offers}/${OFFER_ID}${APIRoute.NearbyOffers}`)
      .reply(200, mockRawOffers);

    const store = mockStore();
    await store.dispatch(fetchNearbyOffersAction(String(OFFER_ID)));
    const adaptMockOffers = mockRawOffers.map(adaptOfferToCamelCase)

    expect(store.getActions()).toEqual([
      setNearbyOffers(adaptMockOffers),
    ]);
  });

  it('should set offer reviews', async () => {
    const OFFER_ID = 1
    mockAPI
      .onGet(`${APIRoute.Reviews}/${OFFER_ID}`)
      .reply(200, mockRawReviews);

    const store = mockStore();
    await store.dispatch(fetchReviewsAction(String(OFFER_ID)));
    const adaptMockReviews = mockRawReviews.map(adaptReviewToCamelCase)
    expect(store.getActions()).toEqual([
      setReviews(adaptMockReviews),
    ]);
  });

  it('should post offer review', async () => {
    const store = mockStore({
      OFFER: {
        offer: mockOffer,
        review: mockPostReview,
      }
    });
    const {OFFER} = store.getState();
    mockAPI
      .onPost(`${APIRoute.Reviews}/${OFFER?.offer?.id}`, OFFER?.review)
      .reply(200, mockRawReviews);

    await store.dispatch(submitReviewAction());
    const adaptMockReviews = mockRawReviews.map(adaptReviewToCamelCase)
    expect(store.getActions()).toEqual([
      setReviewLoading(true),
      setReviews(adaptMockReviews),
      setReview({comment: '', rating: 0}),
      setReviewLoading(false),
    ]);
  });

  it('should set favorite offers if user go to the Favorite page', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockRawFavoriteOffers);

    const store = mockStore();
    await store.dispatch(fetchFavoriteOffersAction());
    const adaptFavoriteMockOffers = mockRawFavoriteOffers.map(adaptOfferToCamelCase)

    expect(store.getActions()).toEqual([
      setLoadingFavoriteOffers(true),
      setFavoriteOffers(adaptFavoriteMockOffers),
      setLoadingFavoriteOffers(false)
    ]);
  });

  it('should toggle favorite offer if user click on bookmark', async () => {
    const OFFER_ID = 1;
    const status = 1
    mockAPI
      .onPost(`${APIRoute.Favorite}/${OFFER_ID}/${status}`)
      .reply(200, mockRawFavoriteOffer);

    const store = mockStore();
    await store.dispatch(submitFavoriteAction(OFFER_ID, status));
    const adaptFavoriteMockOffer = adaptOfferToCamelCase(mockRawFavoriteOffer);

    expect(store.getActions()).toEqual([
      toggleFavoriteOffer(adaptFavoriteMockOffer),
    ]);
  });

  it('should redirect to login page if user not log in', async () => {
    const OFFER_ID = 1;
    const status = 1
    mockAPI
      .onPost(`${APIRoute.Favorite}/${OFFER_ID}/${status}`)
      .reply(401);

    const store = mockStore();
    await store.dispatch(submitFavoriteAction(OFFER_ID, status));

    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.Login)
    ]);
  });
});
