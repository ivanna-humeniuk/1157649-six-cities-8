import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../types/actions';
import {Offer} from '../../types/offers';
import {AppRoute, AuthStatus, SortOptions} from '../../const';
import {AuthInfo} from '../../types/users';
import {Review, ReviewPost} from '../../types/reviews';

export const setOffers = createAction(
  ActionType.SetOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const setOffer = createAction(
  ActionType.SetOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

export const setCity = createAction(
  ActionType.SetCity,
  (city: string) => ({
    payload: city,
  }),
);

export const setNearbyOffers = createAction(
  ActionType.SetNearbyOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const setSortedOption = createAction(
  ActionType.SetSortedOption,
  (option: SortOptions) => ({
    payload: option,
  }),
);

export const setAuthStatus = createAction(
  ActionType.SetAuthStatus,
  (authStatus: AuthStatus) => ({
    payload: authStatus,
  }),
);

export const setAuthInfo = createAction(
  ActionType.SetAuthInfo,
  (authInfo: AuthInfo) => ({
    payload: authInfo,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const setOfferLoading = createAction(
  ActionType.SetOfferLoading,
  (loading: boolean) => ({
    payload: loading,
  }),
);

export const setOffersLoading = createAction(
  ActionType.SetOffersLoading,
  (loading: boolean) => ({
    payload: loading,
  }),
);

export const setAuthLoading = createAction(
  ActionType.SetAuthLoading,
  (loading: boolean) => ({
    payload: loading,
  }),
);

export const setReviews = createAction(
  ActionType.SetReviews,
  (reviews: Review[]) => ({
    payload: reviews,
  }),
);

export const setReview = createAction(
  ActionType.SetReview,
  (review: ReviewPost) => ({
    payload: review,
  }),
);

export const setReviewLoading = createAction(
  ActionType.SetReviewLoading,
  (isReviewLoading: boolean) => ({
    payload: isReviewLoading,
  }),
);

export const setFavoriteOffers = createAction(
  ActionType.SetFavoriteOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const toggleFavoriteOffer = createAction(
  ActionType.ToggleFavoriteOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

export const setLoadingFavoriteOffers = createAction(
  ActionType.SetLoadingFavoriteOffers,
  (isLoading: boolean) => ({
    payload: isLoading,
  }),
);

