import {OffersState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';
import {CITIES, SortOptions} from '../../const';

const initialState = {
  city: CITIES[0],
  sortedOption: SortOptions.Popular,
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
        sortedOption: SortOptions.Popular,
        filteredList: state.offers.filter((offer)=> offer.city.name === action.payload)};
    case ActionType.SetOffersLoading:
      return {
        ...state,
        isLoadingStatus: action.payload,
      };
    case ActionType.SetSortedOffers:
      switch (action.payload) {
        case SortOptions.FromLowToHighPrice:
          return {
            ...state,
            sortedOption: action.payload,
            filteredList: state.filteredList.sort((offerA, offerB ) => offerA.price - offerB.price),
          };
        case SortOptions.FromHighToLowPrice:
          return {
            ...state,
            sortedOption: action.payload,
            filteredList: state.filteredList.sort((offerA, offerB ) => offerB.price - offerA.price),
          };
        case SortOptions.TopRatedFirst:
          return {
            ...state,
            sortedOption: action.payload,
            filteredList: state.filteredList.sort((offerA, offerB ) => offerB.rating - offerA.rating),
          };
        case SortOptions.Popular:
          return {
            ...state,
            sortedOption: action.payload,
            filteredList: state.offers.filter((offer)=> offer.city.name === state.city),
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

export {offersReducer};
