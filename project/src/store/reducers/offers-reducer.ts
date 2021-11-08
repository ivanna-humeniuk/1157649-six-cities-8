import {OffersState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';
import {CITIES, SortOptions} from '../../const';
import {Offer} from '../../types/offers';

const initialState = {
  city: CITIES[0],
  sortedOption: SortOptions.Popular,
  offers: [],
  filteredList: [],
  isLoadingStatus: false,
};

const pickSortFunction = (sorting: SortOptions) => {
  switch (sorting) {
    case SortOptions.FromLowToHighPrice:
      return function sortByPriceToHigh (offerA: Offer, offerB: Offer){ return offerA.price - offerB.price;};
    case SortOptions.FromHighToLowPrice:
      return function sortByPriceToLow (offerA: Offer, offerB: Offer){ return offerB.price - offerA.price;};
    case SortOptions.TopRatedFirst:
      return function sortByTopRatedFirst (offerA: Offer, offerB: Offer){ return offerB.rating - offerA.rating;};
  }
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
        filteredList: state.offers.filter((offer)=> offer.city.name === action.payload).sort(pickSortFunction(state.sortedOption))};
    case ActionType.SetOffersLoading:
      return {
        ...state,
        isLoadingStatus: action.payload,
      };
    case ActionType.SetSortedOffers:
      return {
        ...state,
        sortedOption: action.payload,
        filteredList: state.offers.filter((offer)=> offer.city.name === state.city).sort(pickSortFunction(action.payload)),
      };
    default:
      return {...state};
  }
};

export {offersReducer};
