import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {
  setNearbyOffers,
  setOffer,
  setOffers,
  setCity,
  redirectToRoute,
  setSortedOffers
} from '../store/actions';

export enum ActionType {
  SetCity = 'setCity',
  SetOffers = 'setOffers',
  SetOffer = 'setOffer',
  SetNearbyOffers = 'setNearbyOffers',
  LoadError = 'loadError',
  RedirectToRoute = 'redirectToRoute',
  SetSortedOffers = 'setSortedOffers'
}

export type Actions =
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setOffer>
  | ReturnType<typeof setCity>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setSortedOffers>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
