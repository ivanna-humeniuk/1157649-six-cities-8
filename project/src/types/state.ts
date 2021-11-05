import {Offer} from './offers';
import {AuthStatus} from '../const';
import {AuthInfo} from './users';
import {Review, ReviewPost} from "./reviews";

export type State = {
  offer: OfferState,
  offers: OffersState,
  auth: AuthState,
};

export type OffersState = {
  city: string;
  offers: Offer[];
  filteredList: Offer[];
  isLoadingStatus: boolean;
}
export type OfferState = {
  offer: Offer | null;
  nearbyList: Offer[];
  loading: boolean;
  reviews: Review[];
  review: ReviewPost;
  isReviewLoading: boolean;
}

export type AuthState = {
  status: AuthStatus;
  info: AuthInfo | null;
  isLoading: boolean;
}
