import {Offer} from './offers';

export type Listing = {
  id: number;
  title: string;
  places: Offer[];
}
