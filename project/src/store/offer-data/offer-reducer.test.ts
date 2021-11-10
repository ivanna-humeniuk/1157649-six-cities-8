import {setNearbyOffers, setOffer, setOfferLoading, setReview, setReviewLoading, setReviews} from '../actions';
import {offers} from '../../mocks/offers';
import {offerReducer} from './offer-reducer';
import {reviews} from '../../mocks/reviews';

const initialOfferState = {
  offer: null,
  nearbyList: [],
  loading: false,
  reviews: [],
  review: {
    comment: '',
    rating: 0,
  },
  isReviewLoading: false,
};

describe('Reducer: offerReducer', () => {

  it('should return initial state without additional parameters', () =>{
     expect(offerReducer(void 0, {type: 'UNKNOWN_ACTION'}))
       .toEqual(initialOfferState);
  });

  it('should update offer by load offer', () => {
    const mockOffer = offers[0];
    expect(offerReducer(initialOfferState, setOffer(mockOffer)))
      .toEqual({...initialOfferState, offer: mockOffer});
  });

  it('should update nearby offers list by load nearby offers list', () => {
    const mockOffers = offers;
    expect(offerReducer(initialOfferState, setNearbyOffers(mockOffers)))
      .toEqual({...initialOfferState, nearbyList: mockOffers});
  });

  it('should update offer loading status if it is true', () => {
    expect(offerReducer(initialOfferState, setOfferLoading(true)))
      .toEqual({...initialOfferState, loading: true});
  });

  it('should update offer loading status if it is false', () => {
    expect(offerReducer(initialOfferState, setOfferLoading(false)))
      .toEqual({...initialOfferState, loading: false});
  });

  it('should update reviews by load reviews', () => {
    const mockReviews = reviews;
    expect(offerReducer(initialOfferState, setReviews(mockReviews)))
      .toEqual({...initialOfferState, reviews: mockReviews});
  });

  it('should update review by a fill fields', () => {
    const mockReview = {comment: 'The best place ever!', rating: 5};
    expect(offerReducer(initialOfferState, setReview(mockReview)))
      .toEqual({...initialOfferState, review: mockReview});
  });

  it('should update review loading status if it is true', () => {
    expect(offerReducer(initialOfferState, setReviewLoading(true)))
      .toEqual({...initialOfferState, isReviewLoading: true});
  });

  it('should update review loading status if it is false', () => {
    expect(offerReducer(initialOfferState, setReviewLoading(false)))
      .toEqual({...initialOfferState, isReviewLoading: false});
  });

});
