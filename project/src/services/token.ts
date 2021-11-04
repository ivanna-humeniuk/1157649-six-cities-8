import {AUTH_TOKEN_KEY_NAME} from '../const';

export type Token = string;

export const setToken = (token: Token):void => {
  try {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  } catch (error) {
    /* eslint-disable no-console */
    console.warn(error);
  }
};

export const getToken = ():Token => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? '';
  } catch (error) {
    /* eslint-disable no-console */
    console.warn(error);
    return '';
  }
};

export const dropToken = (): void => {
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  } catch (error) {
    /* eslint-disable no-console */
    console.warn(error);
  }
};
