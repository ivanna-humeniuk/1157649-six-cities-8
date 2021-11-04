import {connect} from 'react-redux';
import {State} from '../../types/state';
import Reviews from './reviews';

const mapStateToProps = (state: State) => ({
  authStatus: state.auth.status,
});

export default  connect(mapStateToProps)(Reviews);
