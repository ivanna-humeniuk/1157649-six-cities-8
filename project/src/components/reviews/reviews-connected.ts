import {connect} from 'react-redux';
import {State} from '../../types/state';
import Reviews from './reviews';

const mapStateToProps = (state: State) => ({
  authStatus: state.auth.status,
  reviews: state.offer.reviews,
});

export default  connect(mapStateToProps)(Reviews);
