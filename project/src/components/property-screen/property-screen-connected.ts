import {connect} from 'react-redux';
import {State} from '../../types/state';
import PropertyScreen from './property-screen';
import {fetchNearbyOffersAction, fetchOfferAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/actions';

const mapStateToProps = (state: State) => ({
  offer: state.offer.offer,
  nearbyOffers: state.offer.nearbyOffers,
  offerLoading: state.offer.offerLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getNearbyOffers: (id: string) => dispatch(fetchNearbyOffersAction(id)),
  getOffer: (id: string) => dispatch(fetchOfferAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
