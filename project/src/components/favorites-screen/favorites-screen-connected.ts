import {connect} from 'react-redux';
import {State} from '../../types/state';
import FavoritesScreen from './favorites-screen';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.authorizationStatus,
});

const connector = connect(mapStateToProps);
export default connector(FavoritesScreen);
