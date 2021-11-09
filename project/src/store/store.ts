import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {createAPI} from '../services/api';
import {redirect} from './middlewares/redirect';
import {setAuthStatus} from './actions';
import {AuthStatus, NameSpace} from '../const';
import {offersReducer} from './offers-data/offers-reducer';
import {authReducer} from './auth-data/auth-reducer';
import {offerReducer} from './offer-data/offer-reducer';

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersReducer,
  [NameSpace.offer]: offerReducer,
  [NameSpace.auth]: authReducer,
});

const api = createAPI(
  () => store.dispatch(setAuthStatus(AuthStatus.NoAuth)),
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
