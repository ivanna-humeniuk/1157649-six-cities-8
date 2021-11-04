import {connect} from 'react-redux';
import {State} from '../../types/state';
import PrivateRoute from './private-route';

const mapStateToProps = (state: State) => ({
  authStatus: state.auth.status,
});

const connector = connect(mapStateToProps);
export default connector(PrivateRoute);
