import {connect} from 'react-redux';
import {State} from '../../types/state';
import PropertyScreen from './property-screen';
import {fetchNearbyOffersAction, fetchOfferAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/actions';

const mapStateToProps = (state: State) => ({
  city: state.city,
  offers: state.offers,
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getNearbyOffer: (id: string) => dispatch(fetchNearbyOffersAction(id)),
  getOffer: (id: string) => dispatch(fetchOfferAction(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(PropertyScreen);
