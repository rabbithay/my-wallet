import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4002'
  : 'https://myywallet.herokuapp.com';

export function register(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

export function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

export function logout(config) {
  return axios.post(`${BASE_URL}/logout`, {}, config);
}
