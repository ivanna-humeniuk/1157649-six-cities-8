import {connect} from 'react-redux';
import {State} from '../../types/state';
import Reviews from './reviews';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.auth.authorizationStatus,
});

export default  connect(mapStateToProps)(Reviews);
