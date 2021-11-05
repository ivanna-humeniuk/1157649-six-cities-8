import {OfferState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';

const initialState = {
  offer: null,
  nearbyList: [],
  loading: false,
};

const offerReducer = (state: OfferState = initialState, action: Actions): OfferState => {
  switch (action.type) {
    case ActionType.SetOffer:
      return {
        ...state,
        offer: action.payload,
      };
    case ActionType.SetNearbyOffers:
      return {
        ...state,
        nearbyList: action.payload,
      };
    case ActionType.SetOfferLoading:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {...state};
  }
};

export {offerReducer};
