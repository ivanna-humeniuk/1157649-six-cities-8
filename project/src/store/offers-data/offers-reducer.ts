import {createReducer} from '@reduxjs/toolkit';
import {OffersState} from '../../types/state';
import {CITIES, SortOptions} from '../../const';
import {
  setCity, setFavoriteOffers,
  setOffers,
  setOffersLoading,
  setSortedOption,
  toggleFavoriteOffer
} from '../actions/actions';

const initialState: OffersState = {
  city: CITIES[0],
  sortedOption: SortOptions.Popular,
  offers: [],
  isLoadingStatus: false,
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.offers = state.offers.map((offer) => {
        const matchOffer = action.payload.find((favor) => offer.id === favor.id);
        if (matchOffer) {
          return matchOffer;
        }
        return offer;
      });
    })
    .addCase(toggleFavoriteOffer, (state, action) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.isLoadingStatus = action.payload;
    })
    .addCase(setSortedOption, (state, action) => {
      state.sortedOption = action.payload;
    });
});


export {offersReducer};
