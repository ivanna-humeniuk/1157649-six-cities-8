import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {listings} from './mocks/listings';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {redirect} from './store/middlewares/redirect';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App reviews={reviews} listings={listings}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
