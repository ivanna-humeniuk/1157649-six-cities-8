import {AUTH_TOKEN_KEY_NAME} from '../const';

export type Token = string;

export const setToken = (token: Token): boolean => {
  try {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
    return true;
  } catch (error) {
    return false;
  }
};

export const getToken = ():Token => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? '';
  } catch (error) {
    return '';
  }
};

export const dropToken = (): boolean => {
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
    return true;
  } catch (error) {
    return false;
  }
};
