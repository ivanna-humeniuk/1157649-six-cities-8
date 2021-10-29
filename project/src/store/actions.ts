import {ActionType} from '../types/actions';
import {Offer} from '../types/offers';
import {AppRoute} from '../const';

export const loadOffers = (offers: Offer[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const loadOffer = (offer: Offer) => ({
  type: ActionType.LoadOffer,
  payload: offer,
} as const);

export const setCity = (city: string) => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

export const loadNearbyOffers = (offers: Offer[]) => ({
  type: ActionType.LoadNearbyOffers,
  payload: offers,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
