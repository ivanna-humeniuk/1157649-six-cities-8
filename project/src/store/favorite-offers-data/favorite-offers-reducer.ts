import {createReducer} from '@reduxjs/toolkit';
import {setLoadingFavoriteOffers} from '../actions/actions';
import {FavoriteOffersState} from '../../types/state';

const initialState: FavoriteOffersState = {
  isLoadingFavorite: false,
};

const favoriteOffersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoadingFavoriteOffers, (state, action) => {
      state.isLoadingFavorite = action.payload;
    });
});

export {favoriteOffersReducer};
