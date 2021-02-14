import axios from 'axios';
import axiosRetry from 'axios-retry';
import { getSession } from './session';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1/'
});

axiosRetry(api, { retries: 2 });

api.interceptors.request.use(
  async (config) => {
    config.headers.common['Authorization'] = `Bearer ${getSession()}`;
    config.headers['X-Yofit-ApiKey'] = 'an3i21uy39812ndasbdsa'

    console.log("[ENVIOU OK]", config);

    return config;
  },
  (error) => {
    console.log("[REQUEST ERR]", error);
    
    // TODO: Sentry notification

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("[RESPONDEU OK]", response);
    return response;
  },
  (error) => {
    console.log("[RESPONSE ERR]", error);

    // TODO: Sentry notification
    
    return Promise.reject(error);
  }
);

export default api;
