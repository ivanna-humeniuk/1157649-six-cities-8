import {OffersState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';
import {CITIES} from '../../const';

const initialState = {
  city: CITIES[0],
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
      };
    case ActionType.FilterOffers:
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
