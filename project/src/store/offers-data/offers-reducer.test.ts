import {offersReducer} from './offers-reducer';
import {
  setCity,
  setFavoriteOffers,
  setOffers,
  setOffersLoading,
  setSortedOption,
  toggleFavoriteOffer
} from '../actions/actions';
import {mockFavoriteOffer, mockFavoriteOffers, mockOffer, mockOffers} from '../../mocks/offers';
import {CITIES, SortOptions} from '../../const';

describe('Reducer: offersReducer', () => {

  it('should return initial state without additional parameters', () =>{
     expect(offersReducer(void 0, {type: 'UNKNOWN_ACTION'}))
       .toEqual({
         city: CITIES[0],
         sortedOption: SortOptions.Popular,
         offers: [],
         isLoadingStatus: false,
       });
  });

  it('should update offers by load offers', () => {
    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: [],
      isLoadingStatus: false,
    }
    expect(offersReducer(state, setOffers(mockOffers)))
      .toEqual({
        city: CITIES[0],
        sortedOption: SortOptions.Popular,
        offers: mockOffers,
        isLoadingStatus: false,
      });
  });

  it('should update offers by set favorite offers', () => {

    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: mockOffers,
      isLoadingStatus: false,
    }

    const mockOffersResult = state.offers.map((offer) => {
      const matchMockOffer = mockFavoriteOffers.find((favor) => offer.id === favor.id);
      if (matchMockOffer) {
        return matchMockOffer;
      }
      return offer;
    });

    expect(offersReducer(state, setFavoriteOffers(mockFavoriteOffers)))
      .toEqual( {
        city: CITIES[0],
        sortedOption: SortOptions.Popular,
        offers: mockOffersResult,
        isLoadingStatus: false,
      });
  });

  it('should toggle favorite offer when user click bookmark', () => {
    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: mockOffers,
      isLoadingStatus: false,
    }
    const mockOffersResult = state.offers.map((offer) => offer.id === mockFavoriteOffer.id ? mockFavoriteOffer : offer);

    expect(offersReducer(state, toggleFavoriteOffer(mockFavoriteOffer)))
      .toEqual({
        city: CITIES[0],
        sortedOption: SortOptions.Popular,
        offers: mockOffersResult,
        isLoadingStatus: false,
      });
  });

  it('should update city by choose city', () => {
    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: [],
      isLoadingStatus: false,
    }
    const city = CITIES[1];
    expect(offersReducer(state, setCity(city)))
      .toEqual({
        city: city,
        sortedOption: SortOptions.Popular,
        offers: [],
        isLoadingStatus: false,
      });
  });

  it('should update sorted option by choose option', () => {
    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: [],
      isLoadingStatus: false,
    }
    const sortedOption = SortOptions.FromHighToLowPrice;
    expect(offersReducer(state, setSortedOption(sortedOption)))
      .toEqual({
        city: CITIES[0],
        sortedOption: sortedOption,
        offers: [],
        isLoadingStatus: false,
      });
  });

  it('should update loading status if it is true', () => {
    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: [],
      isLoadingStatus: false,
    }
    expect(offersReducer(state, setOffersLoading(true)))
      .toEqual({
        city: CITIES[0],
        sortedOption: SortOptions.Popular,
        offers: [],
        isLoadingStatus: true,
      });
  });

  it('should update loading status if it is false', () => {
    const state =  {
      city: CITIES[0],
      sortedOption: SortOptions.Popular,
      offers: [],
      isLoadingStatus: false,
    }
    expect(offersReducer(state, setOffersLoading(false)))
      .toEqual({
        city: CITIES[0],
        sortedOption: SortOptions.Popular,
        offers: [],
        isLoadingStatus: false,
      });
  });
});
