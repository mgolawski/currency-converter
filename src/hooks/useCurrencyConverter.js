import axios from "axios";
import { useState } from "react";
import { useDebounce } from "react-use";
import { CONVERT_CURRENCY_URL } from "../constants";

const CURRENCY_MAX_DIGITS = 5;

const getCurrencyListURL = (amount, from, to) => {
  const params = new URLSearchParams({
    amount,
    from,
    to,
    places: CURRENCY_MAX_DIGITS,
  });

  return `${CONVERT_CURRENCY_URL}?${params.toString()}`;
};

const fetchCurrencyConversion = async (amount, from, to) => {
  const { data } = await axios.get(getCurrencyListURL(amount, from, to));

  return data.result;
};

export const useCurrencyConverter = (
  amount,
  baseCurrency,
  exchangeCurrency
) => {
  const [convertedCurrency, setConvertedCurrency] = useState(amount);

  useDebounce(
    () => {
      if (!baseCurrency || !exchangeCurrency) {
        return;
      }

      const convertCurrency = async () => {
        const convertedCurrency = await fetchCurrencyConversion(
          amount,
          baseCurrency,
          exchangeCurrency
        );
        setConvertedCurrency(convertedCurrency || 0);
      };

      convertCurrency(baseCurrency, exchangeCurrency);
    },
    100,
    [amount, baseCurrency, exchangeCurrency]
  );

  return { convertedCurrency };
};
