import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus, ...rest} = props;

  return (
    <Route
      {...rest}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? children
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
