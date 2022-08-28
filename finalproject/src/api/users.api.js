
import axios from "./http";

const LOGIN_URL = "/auth/login";
const REFRESH_TOKEN_URL = "/auth/refresh-token";

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(LOGIN_URL, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const refreshTokenRequest = async () => {
  try {
    const response = await axios.post(REFRESH_TOKEN_URL);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};