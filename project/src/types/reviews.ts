import {User} from './users';

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
};
