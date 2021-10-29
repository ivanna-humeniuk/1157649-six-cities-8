import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions';
import {Offer} from '../types/offers';

const initialState = {
  city: 'Paris',
  offers: [],
  offer: {} as Offer,
  filteredOffers: [],
  nearbyOffers: [],
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadOffers:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
        filteredOffers: action.payload.filter((offer)=> offer.city.name === state.city),
      };
    case ActionType.LoadOffer:
      return {...state, offer: action.payload};
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload,
        filteredOffers: state.offers.filter((offer)=> offer.city.name === action.payload),
      };
    case ActionType.LoadNearbyOffers:
      return {...state, nearbyOffers: action.payload};
    default:
      return {...state};
  }
};

export {reducer};
