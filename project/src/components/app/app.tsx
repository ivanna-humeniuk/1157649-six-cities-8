import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Review} from '../../types/reviews';
import {Listing} from '../../types/listings';

type AppScreenProps = {
  reviews: Review[],
  listings: Listing[],
}

function App({reviews, listings}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} authorizationStatus={AuthorizationStatus.Auth}>
          <FavoritesScreen listings={listings} />
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen reviews={reviews}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
