import {RawUser, User} from './users';

export type ReviewPost = {
  comment: string,
  rating: number,
};

export type Review = ReviewPost & {
  id: number,
  date: string,
  user: User,
};

export type RawReview = ReviewPost & {
  id: number,
  date: string,
  user: RawUser,
};
