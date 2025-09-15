import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default http;


