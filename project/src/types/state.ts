import {Offer} from './offers';

export type State = {
  city: string;
  offers: Offer[];
  offer: Offer;
  filteredOffers: Offer[];
  nearbyOffers: Offer[];
  isDataLoaded: boolean;
}
