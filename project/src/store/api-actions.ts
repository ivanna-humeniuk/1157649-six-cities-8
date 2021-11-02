import {toast} from 'react-toastify';
import {Offer, RawOffer} from '../types/offers';
import {
  APIRoute,
  AppRoute,
  AUTH_FAIL_MESSAGE,
  AUTH_INFO_MESSAGE,
  AuthorizationStatus,
  OFFERS_LOAD_FAIL_MESSAGE
} from '../const';
import {
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setAuthInfo,
  setAuthLoading,
  setNearbyOffers,
  setOffer,
  setOfferLoading,
  setOffers
} from './actions';
import {ThunkActionResult} from '../types/actions';
import {snakeCaseAdapter} from '../utills/snake-case-adapter';
import {AuthData, AuthInfo} from '../types/users';
import {dropToken, setToken} from '../services/token';

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<AuthInfo>(APIRoute.Login);
      dispatch(setAuthInfo(response.data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_INFO_MESSAGE, {autoClose: 2500});
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
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(setAuthLoading(false));
    } catch {
      dispatch(setAuthLoading(false));
      toast.info(AUTH_FAIL_MESSAGE, {autoClose: 2500});
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
    } catch {
      toast.info(AUTH_FAIL_MESSAGE, {autoClose: 2500});
    }
  };


export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferLoading(true));
    try {
      const {data} = await api.get<RawOffer[]>(APIRoute.Offers);
      const hotels: Offer[] = data.map((item) => snakeCaseAdapter(item));
      dispatch(setOffers(hotels));
      dispatch(setOfferLoading(false));
    } catch (error) {
      dispatch(setOfferLoading(false));
      toast.info(OFFERS_LOAD_FAIL_MESSAGE, {autoClose: 2500});
      /* eslint-disable no-console */
      console.error(error);
    }
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferLoading(true));
    try {
      const {data} = await api.get<RawOffer>(`${APIRoute.Offers}/${id}`);
      const hotel: Offer = snakeCaseAdapter(data);
      dispatch(setOffer(hotel));
      dispatch(setOfferLoading(false));
    } catch (error) {
      dispatch(setOfferLoading(false));
      dispatch(redirectToRoute(AppRoute.Main));
      /* eslint-disable no-console */
      console.error(error);
    }
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawOffer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
      const hotels: Offer[] = data.map((item) => snakeCaseAdapter(item));
      dispatch(setNearbyOffers(hotels));
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error);
    }
  };
