import {User} from './users';

export type Offer = {
  id: number,
  previewImage: string,
  title: string,
  price: number,
  type: string,
  rating: number,
  isPremium?: boolean,
  isFavorite?: boolean,
  bedrooms?: number,
  description?: string,
  goods?: Array<string>,
  maxAdults?: number,
  host?: User,
};
