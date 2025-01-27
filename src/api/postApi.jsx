
// https://v6.exchangerate-api.com/v6/f1229562d833093cfe93507a/latest/USD



import axios from "axios";

const api = axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/f1229562d833093cfe93507a",
});

// we need to crate a  get request
export const currencyConverter = (fromCurrency, toCurrency, amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};
