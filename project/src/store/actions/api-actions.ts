import {toast} from 'react-toastify';
import {Offer, RawOffer} from '../../types/offers';
import {
  APIRoute,
  AppRoute,
  AuthStatus,
  AUTH_FAIL_MESSAGE,
  AUTH_INFO_MESSAGE,
  DATA_LOAD_FAIL_MESSAGE,
  LOGOUT_FAIL_MESSAGE,
  TOAST_CLOSE_TIME, NameSpace, REVIEW_FAIL_MESSAGE
} from '../../const';
import {
  redirectToRoute,
  setAuthStatus,
  requireLogout,
  setAuthInfo,
  setAuthLoading,
  setNearbyOffers,
  setOffer,
  setOfferLoading,
  setOffers,
  setReviews,
  setReview,
  setReviewLoading,
  setOffersLoading,
  setFavoriteOffers,
  setLoadingFavoriteOffers,
  toggleFavoriteOffer
} from './actions';
import {ThunkActionResult} from '../../types/actions';
import {adaptOfferToCamelCase, adaptReviewToCamelCase} from '../../utills/adapt-to-camel-case';
import {AuthData, AuthInfo} from '../../types/users';
import {dropToken, setToken} from '../../services/token';
import {RawReview, Review} from '../../types/reviews';

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<AuthInfo>(APIRoute.Login);
      dispatch(setAuthInfo(response.data));
      dispatch(setAuthStatus(AuthStatus.Auth));
    } catch {
      toast.info(AUTH_INFO_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
    }
  };

export const loginAction = ({email,password} :AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setAuthLoading(true));
    try {
      const response = await api.post<AuthInfo>(APIRoute.Login, {email, password});
      const {data: {token}} = response;
      setToken(token);
      dispatch(setAuthInfo(response.data));
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
    } catch(error) {
      toast.info(LOGOUT_FAIL_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
      /* eslint-disable no-console */
      console.warn(error);
    }
  };


export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    dispatch(setOffersLoading(true));
    try {
      const {data} = await api.get<RawOffer[]>(APIRoute.Offers);
      const hotels: Offer[] = data.map(adaptOfferToCamelCase);
      dispatch(setOffers(hotels));
    } catch (error) {
      toast.info(DATA_LOAD_FAIL_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
      /* eslint-disable no-console */
      console.warn(error);
    } finally {
      dispatch(setOffersLoading(false));
    }
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferLoading(true));
    try {
      const {data} = await api.get<RawOffer>(`${APIRoute.Offers}/${id}`);
      const hotel: Offer = adaptOfferToCamelCase(data);
      dispatch(setOffer(hotel));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      /* eslint-disable no-console */
      console.warn(error);
    } finally {
      dispatch(setOfferLoading(false));
    }
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawOffer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
      const hotels: Offer[] = data.map(adaptOfferToCamelCase);
      dispatch(setNearbyOffers(hotels));
    } catch (error) {
      /* eslint-disable no-console */
      console.warn(error);
    }
  };

export const fetchReviewsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawReview[]>(`${APIRoute.Reviews}/${id}`);
      const reviews: Review[] = data.map(adaptReviewToCamelCase);
      dispatch(setReviews(reviews));
    } catch (error) {
      /* eslint-disable no-console */
      console.warn(error);
    }
  };

export const submitReviewAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    dispatch(setReviewLoading(true));
    const {offer, review} = getState()[NameSpace.Offer];
    try {
      const {data} = await api.post<RawReview[]>(`${APIRoute.Reviews}/${offer?.id}`, review);
      const reviews: Review[] = data.map(adaptReviewToCamelCase);
      dispatch(setReviews(reviews));
      dispatch(setReview({comment: '', rating: 0}));
    } catch (error) {
      /* eslint-disable no-console */
      console.warn(error);
      toast.info(REVIEW_FAIL_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
    } finally {
      dispatch(setReviewLoading(false));
    }
  };

export const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setLoadingFavoriteOffers(true));
    try {
      const {data} = await api.get<RawOffer[]>(APIRoute.Favorite);
      const favoriteHotels: Offer[] = data.map(adaptOfferToCamelCase);
      dispatch(setFavoriteOffers(favoriteHotels));
    } catch (error) {
      toast.info(DATA_LOAD_FAIL_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
      /* eslint-disable no-console */
      console.warn(error);
    } finally {
      dispatch(setLoadingFavoriteOffers(false));
    }
  };

export const submitFavoriteAction = (id: number, status: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<RawOffer>(`${APIRoute.Favorite}/${id}/${status}`);
      const hotel: Offer = adaptOfferToCamelCase(data);
      dispatch(toggleFavoriteOffer(hotel));
    } catch (error) {
      /* eslint-disable no-console */
      console.warn(error);
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };
