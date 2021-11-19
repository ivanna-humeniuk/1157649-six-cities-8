import {Action} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  SetAuthStatus = 'auth/setAuthStatus',
  SetAuthInfo = 'auth/setAuthInfo',
  RequireLogout = 'auth/requireLogout',
  SetAuthLoading = 'auth/setAuthLoading',
  SetOffersLoading = 'offers/setOffersLoading',
  SetCity = 'offers/setCity',
  SetOffers = 'offers/setOffers',
  SetSortedOption = 'offers/setSortedOption',
  RedirectToRoute = 'offers/redirectToRoute',
  ToggleFavoriteOffer = 'favorite/toggleFavoriteOffer',
  SetFavoriteOffers = 'favorite/setFavoriteOffers',
  SetLoadingFavoriteOffers = 'favorite/setLoadingFavoriteOffers',
  SetOffer = 'offer/setOffer',
  SetNearbyOffers = 'offer/setNearbyOffers',
  SetOfferLoading = 'offer/setOfferLoading',
  SetReviews = 'offer/setReviews',
  SetReview = 'offer/setReview',
  SetReviewLoading = 'offer/setReviewLoading',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
