import {connect} from 'react-redux';
import {State} from '../../types/state';
import FavoritesScreen from './favorites-screen';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.auth.authorizationStatus,
});

export default connect(mapStateToProps)(FavoritesScreen);
