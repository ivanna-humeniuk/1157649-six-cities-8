import {PointExpression} from 'leaflet';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/hotels',
  NearbyOffers = '/nearby',
  Reviews = '/comments',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const REVIEW_MIN_LENGTH = 50;
export const REVIEW_MAX_LENGTH = 300;

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const POINT_SIZE:PointExpression = [27, 39];
export const POINT_ANCHOR:PointExpression = [13.5, 39];

export const MAP_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const MAP_LAYER_OPTIONS =  {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const OFFERS_LOAD_FAIL_MESSAGE = 'Something went wrong, please reload page!';
export const AUTH_INFO_MESSAGE = 'Don\'t forget to log in!';
export const AUTH_FAIL_MESSAGE = 'Something went wrong, please try to log in again!';
export const LOGOUT_FAIL_MESSAGE = 'Something went wrong, please try to log out again!';
export const PASSWORD_ERROR_MESSAGE = 'The password should include at least one letter and one number.';

export const URL_API = 'https://8.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;

export enum HttpCode {
  Unauthorized = 401,
}

export const AUTH_TOKEN_KEY_NAME = 'six-cities-8-token-key';

export const TOAST_CLOSE_TIME = 2500;

export const PASSWORD_REG_EXP = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/);

export const HEADERS_TOKEN = 'x-token';
