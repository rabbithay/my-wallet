import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export function register(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

export function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

export function logout(config) {
  return axios.post(`${BASE_URL}/logout`, {}, config);
}
