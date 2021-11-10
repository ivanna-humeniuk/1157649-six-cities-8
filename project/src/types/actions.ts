import {Action} from '@reduxjs/toolkit';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  SetAuthStatus = 'setAuthStatus',
  SetAuthInfo = 'setAuthInfo',
  RequireLogout = 'requireLogout',
  SetCity = 'setCity',
  SetOffers = 'setOffers',
  SetOffer = 'setOffer',
  ToggleFavoriteOffer = 'toggleFavoriteOffer',
  SetFavoriteOffers = 'setFavoriteOffers',
  SetLoadingFavoriteOffers = 'setLoadingFavoriteOffers',
  SetNearbyOffers = 'setNearbyOffers',
  RedirectToRoute = 'redirectToRoute',
  SetSortedOption = 'setSortedOption',
  SetOfferLoading = 'setOfferLoading',
  SetOffersLoading = 'setOffersLoading',
  SetAuthLoading = 'setAuthLoading',
  SetReviews = 'setReviews',
  SetReview = 'setReview',
  SetReviewLoading = 'setReviewLoading'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
