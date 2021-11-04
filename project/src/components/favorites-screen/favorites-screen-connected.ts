import {connect} from 'react-redux';
import {State} from '../../types/state';
import FavoritesScreen from './favorites-screen';

const mapStateToProps = (state: State) => ({
  authStatus: state.auth.status,
});

export default connect(mapStateToProps)(FavoritesScreen);
