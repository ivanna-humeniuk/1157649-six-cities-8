import {OffersState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';
import {CITIES} from '../../const';

const initialState = {
  city: CITIES[0],
  offers: [],
  filteredList: [],
  isLoadingStatus: false,
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
        filteredList: state.offers.filter((offer)=> offer.city.name === action.payload)};
    case ActionType.SetOffersLoading:
      return {
        ...state,
        isLoadingStatus: action.payload,
      };
    default:
      return {...state};
  }
};

export {offersReducer};
