import {Switch, Route, Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../screens/main-screen/main-screen';
import LoginScreen from '../screens/login-screen/login-screen';
import FavoritesScreen from '../screens/favorites-screen/favorites-screen';
import PropertyScreen from '../screens/property-screen/property-screen';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {store} from '../../store/store';
import {checkAuthAction, fetchOffersAction} from '../../store/actions/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <MainScreen/>
      </Route>
      <Route exact path={AppRoute.Login}>
        <LoginScreen/>
      </Route>
      <PrivateRoute exact path={AppRoute.Favorites}>
        <FavoritesScreen />
      </PrivateRoute>
      <Route exact path={AppRoute.Room}>
        <PropertyScreen/>
      </Route>
      <Route path={AppRoute.NotFound}>
        <NotFoundScreen/>
      </Route>
      <Redirect to={AppRoute.NotFound} />
    </Switch>
  );
}

export default App;
