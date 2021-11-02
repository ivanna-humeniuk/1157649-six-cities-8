import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {
  requireAuthorization,
  setAuthInfo,
  requireLogout,
  setNearbyOffers,
  setOffer,
  setOffers,
  setCity,
  redirectToRoute,
  setOfferLoading,
  setOffersLoading,
  setAuthLoading
} from '../store/actions';

export enum ActionType {
  RequireAuthorization = 'requireAuthorization',
  SetAuthInfo = 'setAuthInfo',
  RequireLogout = 'requireLogout',
  SetCity = 'setCity',
  SetOffers = 'setOffers',
  SetOffer = 'setOffer',
  SetNearbyOffers = 'setNearbyOffers',
  LoadError = 'loadError',
  RedirectToRoute = 'redirectToRoute',
  SetOfferLoading = 'setOfferLoading',
  SetOffersLoading = 'setOffersLoading',
  SetAuthLoading = 'setAuthLoading'
}

export type Actions =
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof setAuthInfo>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setOffer>
  | ReturnType<typeof setCity>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setOfferLoading>
  | ReturnType<typeof setOffersLoading>
  | ReturnType<typeof setAuthLoading>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
