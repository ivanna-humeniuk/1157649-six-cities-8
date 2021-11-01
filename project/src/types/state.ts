import {Offer} from './offers';

export type State = {
  city: string;
  offers: Offer[];
  offer: Offer | null;
  filteredOffers: Offer[];
  nearbyOffers: Offer[];
  isDataLoaded: boolean;
  authorizationStatus: boolean;
}
