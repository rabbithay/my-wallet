import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}`
  : 'https://myywallet.herokuapp.com';

export function getTransactions(config) {
  return axios.get(`${BASE_URL}/home`, config);
}

export function createNewExpense({ body, config }) {
  return axios.post(`${BASE_URL}/expense`, body, config);
}

export function createNewIncome({ body, config }) {
  return axios.post(`${BASE_URL}/income`, body, config);
}
