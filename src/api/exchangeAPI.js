import axios from 'axios';

const API_KEY = '44678254acae284de121d290';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export const getRates = async (baseCurrency) => {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
  return response.data;
};

export const convertCurrency = async (from, to, amount) => {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/pair/${from}/${to}/${amount}`);
  return response.data;
};
