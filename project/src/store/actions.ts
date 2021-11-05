import {ActionType} from '../types/actions';
import {Offer} from '../types/offers';
import {AppRoute, AuthStatus, SortOptions} from '../const';
import {AuthInfo} from '../types/users';

export const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export const setOffer = (offer: Offer) => ({
  type: ActionType.SetOffer,
  payload: offer,
} as const);

export const filterOffers = (city: string) => ({
  type: ActionType.FilterOffers,
  payload: city,
} as const);

export const setNearbyOffers = (offers: Offer[]) => ({
  type: ActionType.SetNearbyOffers,
  payload: offers,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export const setSortedOffers = (option: SortOptions) => ({
  type: ActionType.SetSortedOffers,
  payload: option,
} as const);

export const setAuthStatus = (authStatus: AuthStatus) => ({
  type: ActionType.SetAuthStatus,
  payload: authStatus,
} as const);

export const setAuthInfo = (authInfo: AuthInfo) => ({
  type: ActionType.SetAuthInfo,
  payload: authInfo,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const setOfferLoading = (loading: boolean) => ({
  type: ActionType.SetOfferLoading,
  payload: loading,
} as const);

export const setOffersLoading = (loading: boolean) => ({
  type: ActionType.SetOffersLoading,
  payload: loading,
} as const);

export const setAuthLoading = (loading: boolean) => ({
  type: ActionType.SetAuthLoading,
  payload: loading,
} as const);
