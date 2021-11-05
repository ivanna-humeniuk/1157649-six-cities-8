import {toast} from 'react-toastify';
import {Offer, RawOffer} from '../types/offers';
import {
  APIRoute,
  AppRoute,
  AUTH_FAIL_MESSAGE,
  AUTH_INFO_MESSAGE,
  AuthStatus, LOGOUT_FAIL_MESSAGE,
  OFFERS_LOAD_FAIL_MESSAGE, TOAST_CLOSE_TIME
} from '../const';
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
  filterOffers
} from './actions';
import {ThunkActionResult} from '../types/actions';
import {adaptToCamelCase} from '../utills/adapt-to-camel-case';
import {AuthData, AuthInfo} from '../types/users';
import {dropToken, setToken} from '../services/token';

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
      console.error(error);
    }
  };


export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    dispatch(setOfferLoading(true));
    try {
      const {data} = await api.get<RawOffer[]>(APIRoute.Offers);
      const hotels: Offer[] = data.map(adaptToCamelCase);
      dispatch(setOffers(hotels));
      dispatch(filterOffers(getState().offers.city));
    } catch (error) {
      toast.info(OFFERS_LOAD_FAIL_MESSAGE, {autoClose: TOAST_CLOSE_TIME});
      /* eslint-disable no-console */
      console.error(error);
    } finally {
      dispatch(setOfferLoading(false));
    }
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferLoading(true));
    try {
      const {data} = await api.get<RawOffer>(`${APIRoute.Offers}/${id}`);
      const hotel: Offer = adaptToCamelCase(data);
      dispatch(setOffer(hotel));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.Main));
      /* eslint-disable no-console */
      console.error(error);
    } finally {
      dispatch(setOfferLoading(false));
    }
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawOffer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
      const hotels: Offer[] = data.map(adaptToCamelCase);
      dispatch(setNearbyOffers(hotels));
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error);
    }
  };
