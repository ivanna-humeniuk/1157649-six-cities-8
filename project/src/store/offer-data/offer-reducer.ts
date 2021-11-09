import {createReducer} from '@reduxjs/toolkit';
import {
  setNearbyOffers,
  setOffer,
  setOfferLoading,
  setReview,
  setReviewLoading,
  setReviews
} from '../actions';
import {OfferState} from '../../types/state';

const initialState: OfferState = {
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


const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyList = action.payload;
    })
    .addCase(setOfferLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReview, (state, action) => {
      state.review = action.payload;
    })
    .addCase(setReviewLoading, (state, action) => {
      state.isReviewLoading = action.payload;
    });
});

export {offerReducer};
