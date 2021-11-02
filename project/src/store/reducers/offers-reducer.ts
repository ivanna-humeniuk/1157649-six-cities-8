import {OffersState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';

const initialState = {
  city: 'Paris',
  offers: [],
  filteredOffers: [],
  offersLoading: false,
};

const offersReducer = (state: OffersState = initialState, action: Actions): OffersState => {
  switch (action.type) {
    case ActionType.SetOffers:
      return {
        ...state,
        offers: action.payload,
        filteredOffers: action.payload.filter((offer)=> offer.city.name === state.city)};
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload,
        filteredOffers: state.offers.filter((offer)=> offer.city.name === action.payload)};
    case ActionType.SetOffersLoading:
      return {
        ...state,
        offersLoading: action.payload,
      };
    default:
      return {...state};
  }
};

export {offersReducer};
