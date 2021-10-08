import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen placesCount={placesCount}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} authorizationStatus={AuthorizationStatus.NoAuth}>
          <FavoritesScreen />
        </PrivateRoute>
        <Route exact path={AppRoute.Favorites}>
          <FavoritesScreen/>
        </Route>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
