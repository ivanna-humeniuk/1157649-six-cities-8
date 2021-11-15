import {createSelector} from 'reselect';
import {State} from '../../types/state';
import {CITIES, NameSpace} from '../../const';
import {Listing} from '../../types/listings';
import {getOffers} from '../offers-data/selectors';

export const getLoadingFavoriteStatus = (state: State): boolean => state[NameSpace.favorite].isLoadingFavorite;

export const getFavoriteOffers = createSelector(
  getOffers,
  (offers) => offers.filter((offer) => offer.isFavorite),
);

export const getListingOffers = createSelector(
  getFavoriteOffers,
  (favoriteOffers) => (
    CITIES.reduce((acc: Listing[], cur) => (
      [
        ...acc,
        {
          city: cur,
          offers: favoriteOffers.filter((item) => item.city.name === cur),
        },
      ]
    ), [])
  ),
);
