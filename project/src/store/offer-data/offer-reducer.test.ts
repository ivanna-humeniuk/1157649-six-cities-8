import {
  setNearbyOffers,
  setOffer,
  setOfferLoading,
  setReview,
  setReviewLoading,
  setReviews, toggleFavoriteOffer
} from '../actions/actions';
import {mockFavoriteOffer, mockOffer, mockOffers} from '../../mocks/offers';
import {offerReducer} from './offer-reducer';
import {mockPostReview, mockReviews} from '../../mocks/reviews';

describe('Reducer: offerReducer', () => {

  it('should return initial state without additional parameters', () =>{
     expect(offerReducer(void 0, {type: 'UNKNOWN_ACTION'}))
       .toEqual({
         offer: null,
         nearbyList: [],
         loading: false,
         reviews: [],
         review: {
           comment: '',
           rating: 0,
         },
         isReviewLoading: false,
       });
  });

  it('should update offer by load offer', () => {
    const state = {
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
    expect(offerReducer(state, setOffer(mockOffer)))
      .toEqual({
        offer: mockOffer,
        nearbyList: [],
        loading: false,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });

  it('should update nearby offers list by load nearby offers list', () => {
    const state = {
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
    expect(offerReducer(state, setNearbyOffers(mockOffers)))
      .toEqual({
        offer: null,
        nearbyList: mockOffers,
        loading: false,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });

  it('should update favorite status in nearby offers or current offer', () => {
    const state = {
      offer: mockOffer,
      nearbyList: mockOffers,
      loading: false,
      reviews: [],
      review: {
        comment: '',
        rating: 0,
      },
      isReviewLoading: false,
    };

    const mockResultNearbyList = state.nearbyList.map((offer) => offer.id === mockFavoriteOffer.id ? mockFavoriteOffer : offer)
    const mockResultOffer = state.offer?.id === mockFavoriteOffer.id ? mockFavoriteOffer : state.offer;

    expect(offerReducer(state, toggleFavoriteOffer(mockFavoriteOffer)))
      .toEqual({
        offer: mockResultOffer,
        nearbyList: mockResultNearbyList,
        loading: false,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });


  it('should update offer loading status if it is true', () => {
    const state = {
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
    expect(offerReducer(state, setOfferLoading(true)))
      .toEqual({
        offer: null,
        nearbyList: [],
        loading: true,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });

  it('should update offer loading status if it is false', () => {
    const state = {
      offer: null,
      nearbyList: [],
      loading: true,
      reviews: [],
      review: {
        comment: '',
        rating: 0,
      },
      isReviewLoading: false,
    };
    expect(offerReducer(state, setOfferLoading(false)))
      .toEqual({
        offer: null,
        nearbyList: [],
        loading: false,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {
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
    expect(offerReducer(state, setReviews(mockReviews)))
      .toEqual({
        offer: null,
        nearbyList: [],
        loading: false,
        reviews: mockReviews,
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });

  it('should update review by a fill fields', () => {
    const state = {
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
    expect(offerReducer(state, setReview(mockPostReview)))
      .toEqual({
        offer: null,
        nearbyList: [],
        loading: false,
        reviews: [],
        review: mockPostReview,
        isReviewLoading: false,
      });
  });

  it('should update review loading status if it is true', () => {
    const state = {
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
    expect(offerReducer(state, setReviewLoading(true)))
      .toEqual({
        offer: null,
        nearbyList: [],
        loading: false,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: true,
      });
  });

  it('should update review loading status if it is false', () => {
    const state = {
      offer: null,
      nearbyList: [],
      loading: false,
      reviews: [],
      review: {
        comment: '',
        rating: 0,
      },
      isReviewLoading: true,
    };
    expect(offerReducer(state, setReviewLoading(false)))
      .toEqual({
        offer: null,
        nearbyList: [],
        loading: false,
        reviews: [],
        review: {
          comment: '',
          rating: 0,
        },
        isReviewLoading: false,
      });
  });

});
