import {favoriteOffersReducer} from './favorite-offers-reducer';
import {setLoadingFavoriteOffers} from '../actions/actions';

const initialFavoriteState = {
  isLoadingFavorite: false,
};

describe('Reducer: favoriteOffersReducer', () => {
  it('should update auth loading status if it is true', () => {
    expect(favoriteOffersReducer(initialFavoriteState, setLoadingFavoriteOffers(true)))
      .toEqual({...initialFavoriteState, isLoadingFavorite: true});
  });

  it('should update auth loading status if it is false', () => {
    expect(favoriteOffersReducer(initialFavoriteState, setLoadingFavoriteOffers(false)))
      .toEqual({...initialFavoriteState, isLoadingFavorite: false});
  });

});
