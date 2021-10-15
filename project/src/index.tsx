import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const PLACES_COUNT = 6;

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={PLACES_COUNT} offers={offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
