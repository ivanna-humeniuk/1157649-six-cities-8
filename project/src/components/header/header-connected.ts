import {connect} from 'react-redux';
import {State} from '../../types/state';
import Header from './header';
import {ThunkAppDispatch} from '../../types/actions';
import {logoutAction} from '../../store/api-actions';

const mapStateToProps = (state: State) => ({
  authInfo: state.auth.info,
  authStatus: state.auth.status,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
