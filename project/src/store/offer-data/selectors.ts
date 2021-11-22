import {State} from '../../types/state';
import {Offer} from '../../types/offers';
import {NameSpace} from '../../const';
import {Review, ReviewPost} from '../../types/reviews';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;
export const getNearbyList = (state: State): Offer[] => state[NameSpace.Offer].nearbyList;
export const getLoadingOffer = (state: State): boolean=> state[NameSpace.Offer].loading;
export const getReviews = (state: State): Review[] => state[NameSpace.Offer].reviews;
export const getReview = (state: State): ReviewPost => state[NameSpace.Offer].review;
export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isReviewLoading;


