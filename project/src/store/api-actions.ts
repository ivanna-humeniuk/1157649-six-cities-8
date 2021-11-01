import {toast} from 'react-toastify';
import {RawOffer, Offer} from '../types/offers';
import {APIRoute, AppRoute, OFFERS_LOAD_FAIL_MESSAGE} from '../const';
import {setNearbyOffers, setOffer, setOffers, redirectToRoute} from './actions';
import {ThunkActionResult} from '../types/actions';
import {OfferSnakeCaseMapper} from '../utills/snakeCaseMapper';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawOffer[]>(APIRoute.Offers);
      const hotels: Offer[] = data.map((item) => OfferSnakeCaseMapper(item));
      dispatch(setOffers(hotels));
    } catch (error) {
      toast.info(OFFERS_LOAD_FAIL_MESSAGE);
      /* eslint-disable no-console */
      console.error(error);
    }
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawOffer>(`${APIRoute.Offers}/${id}`);
      const hotel: Offer = OfferSnakeCaseMapper(data);
      dispatch(setOffer(hotel));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.Main));
      /* eslint-disable no-console */
      console.error(error);
    }
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<RawOffer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
      const hotels: Offer[] = data.map((item) => OfferSnakeCaseMapper(item));
      dispatch(setNearbyOffers(hotels));
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error);
    }
  };
