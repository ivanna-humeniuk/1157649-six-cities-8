import {connect} from 'react-redux';
import {State} from '../../types/state';
import PropertyScreen from './property-screen';
import {fetchNearbyOffersAction, fetchOfferAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/actions';

const mapStateToProps = (state: State) => ({
  city: state.city,
  offer: state.offer,
  isDataLoaded: state.isDataLoaded,
  nearbyOffers: state.nearbyOffers,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getNearbyOffers: (id: string) => dispatch(fetchNearbyOffersAction(id)),
  getOffer: (id: string) => dispatch(fetchOfferAction(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(PropertyScreen);
