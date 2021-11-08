import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen-connected';
import LoginScreen from '../login-screen/login-screen-connected';
import FavoritesScreen from '../favorites-screen/favorites-screen-connected';
import PropertyScreen from '../property-screen/property-screen-connected';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route-connected';
import {Listing} from '../../types/listings';
import browserHistory from '../../browser-history';
import {store} from '../../store/store';
import {ThunkAppDispatch} from '../../types/actions';
import {checkAuthAction} from '../../store/api-actions';

(store.dispatch as ThunkAppDispatch)(checkAuthAction());

type AppScreenProps = {
  listings: Listing[];
}

function App({listings}: AppScreenProps): JSX.Element {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites}>
          <FavoritesScreen listings={listings} />
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen/>
        </Route>
        <Route path={AppRoute.NotFound}>
          <NotFoundScreen/>
        </Route>
        <Redirect to={AppRoute.NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
