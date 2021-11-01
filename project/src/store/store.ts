import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';
import {createAPI} from '../services/api';
import thunk from 'redux-thunk';
import {redirect} from './middlewares/redirect';
import {reducer} from './reducer';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api), redirect];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
