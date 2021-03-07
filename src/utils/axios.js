import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      Accept: '*/*',
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
