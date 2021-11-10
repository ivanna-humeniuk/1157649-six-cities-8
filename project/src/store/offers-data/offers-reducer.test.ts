import {offersReducer} from './offers-reducer';
import {setCity, setOffers, setOffersLoading, setSortedOption} from '../actions';
import {offers} from '../../mocks/offers';
import {CITIES, SortOptions} from '../../const';

const initialOffersState = {
  city: CITIES[0],
  sortedOption: SortOptions.Popular,
  offers: [],
  isLoadingStatus: false,
}

describe('Reducer: offersReducer', () => {

  it('should return initial state without additional parameters', () =>{
     expect(offersReducer(void 0, {type: 'UNKNOWN_ACTION'}))
       .toEqual(initialOffersState);
  });

  it('should update offers by load offers', () => {
    expect(offersReducer(initialOffersState, setOffers(offers)))
      .toEqual({...initialOffersState, offers: offers,});
  });

  it('should update city by choose city', () => {
    const city = 'Amsterdam';
    expect(offersReducer(initialOffersState, setCity(city)))
      .toEqual({...initialOffersState, city: city});
  });

  it('should update sorted option by choose option', () => {
    const sortedOption = SortOptions.FromHighToLowPrice;
    expect(offersReducer(initialOffersState, setSortedOption(sortedOption)))
      .toEqual({...initialOffersState, sortedOption: sortedOption});
  });

  it('should update loading status if it is true', () => {
    expect(offersReducer(initialOffersState, setOffersLoading(true)))
      .toEqual({...initialOffersState, isLoadingStatus: true});
  });

  it('should update loading status if it is false', () => {
    expect(offersReducer(initialOffersState, setOffersLoading(false)))
      .toEqual({...initialOffersState, isLoadingStatus: false});
  });
});
