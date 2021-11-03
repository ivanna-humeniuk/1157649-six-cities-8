import {State} from '../types/state';
import {Actions, ActionType} from '../types/actions';
import {SortOptions} from '../const';

const initialState = {
  city: 'Paris',
  sortedOption: SortOptions.Popular,
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
        sortedOption: SortOptions.Popular,
        filteredOffers: state.offers.filter((offer)=> offer.city.name === action.payload),
      };
    case ActionType.SetNearbyOffers:
      return {...state, nearbyOffers: action.payload};
    case ActionType.SetSortedOffers:
      switch (action.payload) {
        case SortOptions.FromLowToHighPrice:
          return {
            ...state,
            sortedOption: action.payload,
            filteredOffers: state.filteredOffers.sort((offerA, offerB ) => offerA.price - offerB.price),
          };
        case SortOptions.FromHighToLowPrice:
          return {
            ...state,
            sortedOption: action.payload,
            filteredOffers: state.filteredOffers.sort((offerA, offerB ) => offerB.price - offerA.price),
          };
        case SortOptions.TopRatedFirst:
          return {
            ...state,
            sortedOption: action.payload,
            filteredOffers: state.filteredOffers.sort((offerA, offerB ) => offerB.rating - offerA.rating),
          };
        case SortOptions.Popular:
          return {
            ...state,
            sortedOption: action.payload,
            filteredOffers: state.offers.filter((offer)=> offer.city.name === state.city),
          };
        default:
          return {
            ...state,
          };
      }
    default:
      return {...state};
  }
};


export {reducer};
