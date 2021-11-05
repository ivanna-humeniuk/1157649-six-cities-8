import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {checkIfAuthUnknown} from '../../utills/check-if-auth-unknown';

type PrivateRouteProps = RouteProps & {
  authStatus: AuthStatus;
}


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authStatus, ...rest} = props;

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
