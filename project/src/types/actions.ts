import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  setCity,
  redirectToRoute
} from '../store/actions';

export enum ActionType {
  SetCity = 'setCity',
  LoadOffers = 'loadOffers',
  LoadOffer = 'loadOffer',
  LoadNearbyOffers = 'LoadNearbyOffers',
  LoadError = 'loadError',
  RedirectToRoute = 'redirectToRoute',
}

export type Actions =
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadOffer>
  | ReturnType<typeof setCity>
  | ReturnType<typeof loadNearbyOffers>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
