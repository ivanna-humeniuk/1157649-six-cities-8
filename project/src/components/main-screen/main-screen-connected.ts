import {connect} from 'react-redux';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/actions';
import {setCity} from '../../store/actions';
import MainScreen from './main-screen';
import {fetchOffersAction} from '../../store/api-actions';

const mapStateToProps = (state: State) => ({
  city: state.offers.city,
  filteredOffers: state.offers.filteredOffers,
  offersLoading: state.offers.offersLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleActiveCity: (city: string) => dispatch(setCity(city)),
  getOffers: () => dispatch(fetchOffersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
