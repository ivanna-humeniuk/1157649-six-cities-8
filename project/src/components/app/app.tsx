import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {OffersType} from '../../types/offers';
import {ReviewsTypes} from '../../types/reviews';

type AppScreenProps = {
  placesCount: number;
  offers: OffersType[],
  reviews: ReviewsTypes[],
}

function App({placesCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen placesCount={placesCount} offers={offers}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen/>
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} authorizationStatus={AuthorizationStatus.Auth}>
          <FavoritesScreen offers={offers} />
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen offers={offers} reviews={reviews}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
