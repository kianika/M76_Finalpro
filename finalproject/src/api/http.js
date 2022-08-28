import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../config/constants";
import { refreshToken } from "../redux/feature/usersSlice";

const BASE_URL = "http://localhost:3002";

const CATEGORY_URL = "http://localhost:3002/category"
const SHOPPINGCART_URL = "http://localhost:3002/category"
const PRODUCT = "http://localhost:3002/product"

// users
 const LOGIN_URL = "/auth/login";
 const REFRESH_TOKEN_URL = "/auth/refresh-token";

let store;

export const injectStore = (_store) => {
  store = _store;
};

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((req) => {
  if (req.url === REFRESH_TOKEN_URL) {
    const token = localStorage.getItem(REFRESH_TOKEN);
    req.headers.refreshToken = token;
  } else if (req.url !== LOGIN_URL) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    req.headers.token = token;
  }
  return req;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === REFRESH_TOKEN_URL
    ) {
      return Promise.reject(error);
    }

    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        const res = await axios.request(originalRequest);
        return Promise.resolve(res);
      } catch (e) {}
    }
  }
);
export default axios;