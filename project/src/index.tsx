import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import {store} from './store/store';
import {listings} from './mocks/listings';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App listings={listings}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
