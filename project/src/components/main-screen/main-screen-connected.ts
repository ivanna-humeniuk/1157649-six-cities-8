import {connect} from 'react-redux';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/actions';
import {setCity} from '../../store/actions';
import MainScreen from './main-screen';
import {fetchOffersAction} from '../../store/api-actions';

const mapStateToProps = (state: State) => ({
  city: state.city,
  filteredOffers: state.filteredOffers,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleActiveCity: (city: string) => dispatch(setCity(city)),
  getOffers: () => dispatch(fetchOffersAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(MainScreen);
