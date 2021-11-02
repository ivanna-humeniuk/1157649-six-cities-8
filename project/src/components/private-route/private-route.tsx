import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../../utills/is-checked-auth';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus, ...rest} = props;

  if(isCheckedAuth(authorizationStatus)) {
    return <LoadingScreen/>;
  }

  return (
    <Route {...rest}>
      {authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Redirect to={AppRoute.Login}/>}
    </Route>
  );
}

export default PrivateRoute;
