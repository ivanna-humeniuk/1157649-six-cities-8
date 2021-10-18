import {Listing} from '../types/listings';
import {offers} from './offers';

export const listings: Listing[] = [
  {
    id: 1,
    title: 'Amsterdam',
    places: offers,
  },
  {
    id: 2,
    title: 'Cologne',
    places: offers,
  },
];
