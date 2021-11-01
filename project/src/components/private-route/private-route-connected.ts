import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus, ...rest} = props;
  return (
    <Route {...rest}>
      {authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Redirect to={AppRoute.Login}/>}
    </Route>
  );
}

export default PrivateRoute;
