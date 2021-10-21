import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, city} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {listings} from './mocks/listings';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} listings={listings} city={city}/>
  </React.StrictMode>,
  document.getElementById('root'));
