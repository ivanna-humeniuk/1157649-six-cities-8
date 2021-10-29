import {ActionType} from '../types/actions';

export const setCity = (city: string) => ({
  type: ActionType.SetCity,
  payload: city,
} as const);
