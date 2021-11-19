import {RawReview, Review, ReviewPost} from '../types/reviews';

export const mockReviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 4,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 5,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 6,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 7,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 8,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 9,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 10,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 11,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 12,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-Den.jpg',
      id: 4,
      isPro: true,
      name: 'Den',
    },
  },
];

/* eslint-disable camelcase */
export const mockRawReviews: RawReview[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatar_url: 'img/avatar-max.jpg',
      id: 4,
      is_pro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2018-04-08T14:13:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatar_url: 'img/avatar-Den.jpg',
      id: 4,
      is_pro: true,
      name: 'Den',
    },
  },
];

export const mockReview: Review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

export const mockRawReview: RawReview = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatar_url: 'img/avatar-max.jpg',
    id: 4,
    is_pro: false,
    name: 'Max',
  },
};


export const mockPostReview: ReviewPost = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 4,
};
