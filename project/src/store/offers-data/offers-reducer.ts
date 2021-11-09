import {createReducer} from '@reduxjs/toolkit';
import {OffersState} from '../../types/state';
import {CITIES, SortOptions} from '../../const';
import {setCity, setOffers, setOffersLoading, setSortedOption} from '../actions';

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
