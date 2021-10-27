import {ActionType} from '../types/actions';

export const setCity = (city: string) => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

export const setOffers = (city: string) => ({
  type: ActionType.SetOffers,
  payload: city,
} as const);
