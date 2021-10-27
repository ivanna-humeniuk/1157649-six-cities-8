import {
  setCity,
  setOffers
} from '../store/actions';

export enum ActionType {
  SetCity = 'setCity',
  SetOffers = 'setOffers',
}

export type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setOffers>;
