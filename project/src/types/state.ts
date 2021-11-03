import {Offer} from './offers';
import {SortOptions} from '../const';

export type State = {
  city: string;
  sortedOption: SortOptions;
  offers: Offer[];
  offer: Offer | null;
  filteredOffers: Offer[];
  nearbyOffers: Offer[];
  isDataLoaded: boolean;
  authorizationStatus: boolean;
};
