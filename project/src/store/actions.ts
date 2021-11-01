import {ActionType} from '../types/actions';
import {Offer} from '../types/offers';
import {AppRoute} from '../const';

export const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export const setOffer = (offer: Offer) => ({
  type: ActionType.SetOffer,
  payload: offer,
} as const);

export const setCity = (city: string) => ({
  type: ActionType.SetCity,
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
