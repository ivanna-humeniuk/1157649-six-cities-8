import {connect} from 'react-redux';
import {State} from '../../types/state';
import PrivateRoute from './private-route';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.authorizationStatus,
});

const connector = connect(mapStateToProps);
export default connector(PrivateRoute);
