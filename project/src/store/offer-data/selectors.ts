import {State} from '../../types/state';
import {Offer} from '../../types/offers';
import {NameSpace} from '../../const';
import {Review, ReviewPost} from '../../types/reviews';

export const getOffer = (state: State): Offer | null => state[NameSpace.offer].offer;
export const getNearbyList = (state: State): Offer[] => state[NameSpace.offer].nearbyList;
export const getLoadingOffer = (state: State): boolean=> state[NameSpace.offer].loading;
export const getReviews = (state: State): Review[] => state[NameSpace.offer].reviews;
export const getReview = (state: State): ReviewPost => state[NameSpace.offer].review;
export const getReviewLoadingStatus = (state: State): boolean => state[NameSpace.offer].isReviewLoading;


