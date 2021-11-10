import {createReducer} from '@reduxjs/toolkit';
import {setFavoriteOffers, setLoadingFavoriteOffers, toggleFavoriteOffer} from '../actions';
import {FavoriteOffersState} from '../../types/state';

const initialState: FavoriteOffersState = {
  favoriteOffers: [],
  isLoadingFavorite: false,
};


const favoriteOffersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(toggleFavoriteOffer, (state, action) => {
      state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id );
    })
    .addCase(setLoadingFavoriteOffers, (state, action) => {
      state.isLoadingFavorite = action.payload;
    });
});

export {favoriteOffersReducer};
