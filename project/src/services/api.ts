import axios, {AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios';
import {URL_API, REQUEST_TIMEOUT, HttpCode, HEADERS_TOKEN} from '../const';
import {getToken} from './token';

type UnauthorizedCallback = () => void;

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) =>  {
      const token = getToken();
      if (token) {
        config.headers[HEADERS_TOKEN] = token;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }
      return Promise.reject(error);
    },
  );

  return api;
};
