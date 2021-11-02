import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {createAPI} from '../services/api';
import thunk from 'redux-thunk';
import {redirect} from './middlewares/redirect';
import {requireAuthorization} from './actions';
import {AuthorizationStatus} from '../const';
import {offersReducer} from './reducers/offers-reducer';
import {authReducer} from './reducers/auth-reducer';
import {offerReducer} from './reducers/offer-reducer';

export const reducer = combineReducers({offers: offersReducer, offer: offerReducer, auth: authReducer});

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);
const middlewares = [thunk.withExtraArgument(api), redirect];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
