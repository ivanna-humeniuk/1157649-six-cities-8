import { setCity } from '../store/actions';

export enum ActionType {
  SetCity = 'setCity',
}

export type Actions =
  | ReturnType<typeof setCity>;
