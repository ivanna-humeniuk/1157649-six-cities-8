import {connect} from 'react-redux';
import {State} from '../../types/state';
import Header from './header';
import {ThunkAppDispatch} from '../../types/actions';
import {logoutAction} from '../../store/api-actions';

const mapStateToProps = (state: State) => ({
  authInfo: state.auth.authInfo,
  authorizationStatus: state.auth.authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleLogout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
