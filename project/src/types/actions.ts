import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {
  setAuthStatus,
  setAuthInfo,
  requireLogout,
  setNearbyOffers,
  setOffer,
  setOffers,
  filterOffers,
  redirectToRoute,
  setOfferLoading,
  setOffersLoading,
  setAuthLoading
} from '../store/actions';

export enum ActionType {
  SetAuthStatus = 'setAuthStatus',
  SetAuthInfo = 'setAuthInfo',
  RequireLogout = 'requireLogout',
  FilterOffers = 'filterOffers',
  SetOffers = 'setOffers',
  SetOffer = 'setOffer',
  SetNearbyOffers = 'setNearbyOffers',
  RedirectToRoute = 'redirectToRoute',
  SetOfferLoading = 'setOfferLoading',
  SetOffersLoading = 'setOffersLoading',
  SetAuthLoading = 'setAuthLoading'
}

export type Actions =
  | ReturnType<typeof setAuthStatus>
  | ReturnType<typeof setAuthInfo>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setOffer>
  | ReturnType<typeof filterOffers>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setOfferLoading>
  | ReturnType<typeof setOffersLoading>
  | ReturnType<typeof setAuthLoading>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
