import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
  filteredOffers: offers.filter((offer)=> offer.city.name === 'Paris'),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload,
        filteredOffers: state.offers.filter((offer)=> offer.city.name === action.payload)};
    default:
      return {...state};
  }
};

export {reducer};
