import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import App from './components/app/app';
import {store} from './store/store';
import browserHistory from './browser-history';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <ToastContainer/>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
