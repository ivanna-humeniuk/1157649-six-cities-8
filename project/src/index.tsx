import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PLACES_COUNT = 6;

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={PLACES_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
