import {connect} from 'react-redux';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/actions';
import {filterOffers} from '../../store/actions';
import MainScreen from './main-screen';
import {fetchOffersAction} from '../../store/api-actions';

const mapStateToProps = (state: State) => ({
  city: state.offers.city,
  filteredOffers: state.offers.filteredList,
  offersLoading: state.offers.isLoadingStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onActiveCity: (city: string) => dispatch(filterOffers(city)),
  getOffers: () => dispatch(fetchOffersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
