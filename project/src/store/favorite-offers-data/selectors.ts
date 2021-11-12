import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offer} from '../../types/offers';

export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.favorite].favoriteOffers;
export const getLoadingFavoriteStatus = (state: State): boolean => state[NameSpace.favorite].isLoadingFavorite;
