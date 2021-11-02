import {Offer} from './offers';
import {AuthorizationStatus} from "../const";
import {AuthInfo} from './users';

export type State = {
  offer: OfferState,
  offers: OffersState,
  auth: AuthState,
};

export type OffersState = {
  city: string;
  offers: Offer[];
  filteredOffers: Offer[];
  offersLoading: boolean;
}
export type OfferState = {
  offer: Offer | null;
  nearbyOffers: Offer[];
  offerLoading: boolean;
}

export type AuthState = {
  authorizationStatus: AuthorizationStatus;
  authInfo: AuthInfo | null;
  authLoading: boolean;
}
