import {OffersType} from '../types/offers';

export const offers: OffersType[] = [
  {
    id: 1,
    previewImage: 'img/apartment-01.jpg',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    rating: 4,
    isPremium: false,
    isFavorite: true,
    bedrooms: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 5,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
      id: 1,
    },
  },
  {
    id: 2,
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    rating: 4,
    isFavorite: true,
    bedrooms: 1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 2,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
      id: 1,
    },
  },
  {
    id: 3,
    previewImage: 'img/apartment-02.jpg',
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'Apartment',
    rating: 3.5,
    isFavorite: true,
    bedrooms: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 6,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
      id: 1,
    },
  },
  {
    id: 4,
    previewImage: 'img/apartment-03.jpg',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'Apartment',
    rating: 5,
    isFavorite: true,
    bedrooms: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 7,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: false,
      id: 1,
    },
  },
  {
    id: 5,
    previewImage: 'img/room.jpg',
    title: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    rating: 4,
    isFavorite: true,
    bedrooms: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    maxAdults: 1,
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,
      id: 1,
    },
  },
];
