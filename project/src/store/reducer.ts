import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions';

const initialState = {
  city: 'Paris',
  offers: [],
  offer: null,
  filteredOffers: [],
  nearbyOffers: [],
  isDataLoaded: false,
  authorizationStatus: true,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetOffers:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
        filteredOffers: action.payload.filter((offer)=> offer.city.name === state.city),
      };
    case ActionType.SetOffer:
      return {
        ...state,
        offer: action.payload,
        isDataLoaded: true,
      };
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload,
        filteredOffers: state.offers.filter((offer)=> offer.city.name === action.payload),
      };
    case ActionType.SetNearbyOffers:
      return {...state, nearbyOffers: action.payload};
    default:
      return {...state};
  }
};

export {reducer};
