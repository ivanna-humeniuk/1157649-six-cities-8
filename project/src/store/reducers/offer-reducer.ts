import {OfferState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';

const initialState = {
  offer: null,
  nearbyList: [],
  loading: false,
  reviews: [],
  review: {
    comment: '',
    rating: 0,
  },
  isReviewLoading: false,
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
    case ActionType.SetReviews:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.SetReview:
      return {
        ...state,
        review: {
          ...state.review,
          comment: action.payload.comment,
          rating: action.payload.rating,
        },
      };
    case ActionType.SetReviewLoading:
      return {
        ...state,
        isReviewLoading: action.payload,
      };
    default:
      return {...state};
  }
};

export {offerReducer};
