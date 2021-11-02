import {Switch, Route, Router} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen-connected';
import LoginScreen from '../login-screen/login-screen-connected';
import FavoritesScreen from '../favorites-screen/favorites-screen-connected';
import PropertyScreen from '../property-screen/property-screen-connected';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route-connected';
import {Review} from '../../types/reviews';
import {Listing} from '../../types/listings';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: Review[];
  listings: Listing[];
}

function App({reviews, listings}: AppScreenProps): JSX.Element {
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
          <PropertyScreen reviews={reviews}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
