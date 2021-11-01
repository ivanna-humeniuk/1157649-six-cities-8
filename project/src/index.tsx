import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import {store} from './store/store';
import {reviews} from './mocks/reviews';
import {listings} from './mocks/listings';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App reviews={reviews} listings={listings}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
