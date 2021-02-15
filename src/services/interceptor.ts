import axios from 'axios';
import axiosRetry from 'axios-retry';
import { getSession } from './session';
import env from './env'

const api = axios.create({ baseURL: env.apiV1 });

axiosRetry(api, { retries: 2 });

api.interceptors.request.use(
  async (config) => {
    config.headers.common['Authorization'] = `Bearer ${getSession()}`;
    config.headers['X-Yofit-ApiKey'] = env.apiKey
    
    return config;
  },
  (error) => {
    // TODO: Sentry notification
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Sentry notification
    return Promise.reject(error);
  }
);

export default api;
