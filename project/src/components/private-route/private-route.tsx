import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus, ...rest} = props;
  return (
    <Route {...rest}>
      {authorizationStatus
        ? children
        : <Redirect to={AppRoute.Login}/>}
    </Route>
  );
}

export default PrivateRoute;
