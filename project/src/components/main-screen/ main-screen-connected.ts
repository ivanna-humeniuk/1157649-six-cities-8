import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Actions} from '../../types/actions';
import {setCity} from '../../store/actions';
import {MainScreen} from './main-screen';

const mapStateToProps = (state: State) => ({
  city: state.city,
  filteredOffers: state.filteredOffers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleActiveCity(city: string) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(MainScreen);
