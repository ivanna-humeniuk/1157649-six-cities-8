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
  location: Location,
};

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type City = {
  name: string,
  location: Location,
}
