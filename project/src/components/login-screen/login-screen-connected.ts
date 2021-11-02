import {connect} from 'react-redux';
import {State} from '../../types/state';
import LoginScreen from './login-screen';
import {ThunkAppDispatch} from '../../types/actions';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/users';

const mapStateToProps = (state: State) => ({
  authorizationStatus: state.auth.authorizationStatus,
  authLoading: state.auth.authLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleLogin: ({email,password} :AuthData) => dispatch(loginAction({email,password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
