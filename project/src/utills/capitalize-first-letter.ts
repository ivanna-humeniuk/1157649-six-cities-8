import { Offer } from '../types/offers';

export const capitalizeFirstLetter = (offerObj: Offer | null): Offer['type'] | null =>
  offerObj ? offerObj.type.charAt(0).toUpperCase() + offerObj.type.slice(1) : '';
