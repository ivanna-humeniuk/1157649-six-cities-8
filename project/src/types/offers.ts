import {RawUser, User} from './users';

export type Offer = {
  id: number;
  previewImage: string;
  title: string;
  price: number;
  type: string;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  bedrooms: number;
  description: string;
  goods: Array<string>;
  maxAdults: number;
  host: User;
  location: Location;
  city: City;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

/* eslint-disable camelcase */
export type RawOffer = {
  id: number;
  preview_image: string;
  title: string;
  price: number;
  type: string;
  rating: number;
  is_premium: boolean;
  is_favorite: boolean;
  bedrooms: number;
  description: string;
  goods: Array<string>;
  max_adults: number;
  host: RawUser;
  location: Location;
  city: City;
};
