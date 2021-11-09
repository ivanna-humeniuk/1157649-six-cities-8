import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthStatus} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {checkIfAuthUnknown} from '../../utills/check-if-auth-unknown';
import {getAuthStatus} from '../../store/auth-data/selectors';

type PrivateRouteProps = RouteProps;


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, ...rest} = props;
  const authStatus = useSelector(getAuthStatus);

  if(checkIfAuthUnknown(authStatus)) {
    return <LoadingScreen/>;
  }

  return (
    <Route {...rest}>
      {authStatus === AuthStatus.Auth
        ? children
        : <Redirect to={AppRoute.Login}/>}
    </Route>
  );
}

export default PrivateRoute;
