import {toast} from 'react-toastify';
import {APIOffer, Offer} from '../types/offers';
import {APIRoute, AppRoute, OFFERS_LOAD_FAIL_MESSAGE} from '../const';
import {loadNearbyOffers, loadOffer, loadOffers, redirectToRoute} from './actions';
import {ThunkActionResult} from '../types/actions';
import {OfferMapper, OfferSnakeCaseMapper} from '../services/adapter';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<APIOffer[]>(APIRoute.Offers);
      const mapper:OfferMapper<APIOffer> = new OfferSnakeCaseMapper();
      const hotels: Offer[] = data.map((item) => mapper.mapSnakeCase(item));
      dispatch(loadOffers(hotels));
    } catch (error) {
      toast.info(OFFERS_LOAD_FAIL_MESSAGE);
      /* eslint-disable no-console */
      console.error(error);
    }
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<APIOffer>(`${APIRoute.Offers}/${id}`);
      const mapper:OfferMapper<APIOffer> = new OfferSnakeCaseMapper();
      const hotel: Offer = mapper.mapSnakeCase(data);
      dispatch(loadOffer(hotel));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.Main));
      /* eslint-disable no-console */
      console.error(error);
    }
  };

export const fetchNearbyOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<APIOffer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyOffers}`);
      const mapper:OfferMapper<APIOffer> = new OfferSnakeCaseMapper();
      const hotels: Offer[] = data.map((item) => mapper.mapSnakeCase(item));
      dispatch(loadNearbyOffers(hotels));
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error);
    }
  };
