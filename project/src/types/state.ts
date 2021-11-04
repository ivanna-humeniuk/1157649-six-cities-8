import {Offer} from './offers';
import {AuthStatus} from '../const';
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
  nearbyList: Offer[];
  loading: boolean;
}

export type AuthState = {
  status: AuthStatus;
  info: AuthInfo | null;
  isLoading: boolean;
}
