import {createSelector} from 'reselect';
import {State} from '../../types/state';
import {Offer} from '../../types/offers';
import {NameSpace, SortOptions} from '../../const';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getActiveCity = (state: State): string => state[NameSpace.Offers].city;
export const getSortedOption = (state: State): SortOptions => state[NameSpace.Offers].sortedOption;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isLoadingStatus;


const sortByPriceToHigh = (offerA: Offer, offerB: Offer): number => offerA.price - offerB.price;
const sortByPriceToLow = (offerA: Offer, offerB: Offer): number => offerB.price - offerA.price;
const sortByTopRatedFirst = (offerA: Offer, offerB: Offer): number => offerB.rating - offerA.rating;

const pickSortFunction = (sorting: SortOptions) => {
  switch (sorting) {
    case SortOptions.FromLowToHighPrice:
      return sortByPriceToHigh;
    case SortOptions.FromHighToLowPrice:
      return sortByPriceToLow;
    case SortOptions.TopRatedFirst:
      return sortByTopRatedFirst;
  }
};

export const getFilteredOffers = createSelector(
  getOffers,
  getActiveCity,
  getSortedOption,
  (offers, city, sortedOption) =>
    offers.filter((offer)=> offer.city.name === city).sort(pickSortFunction(sortedOption)),
);
