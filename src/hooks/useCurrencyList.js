import axios from "axios";
import { useEffect, useState } from "react";

import { CURRENCY_LIST_URL } from "../constants";

const fetchCurrencyList = async () => {
  const { data } = await axios.get(CURRENCY_LIST_URL);

  return Object.values(data.symbols);
};

export const useCurrencyList = () => {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    const getCurrencyList = async () => {
      const currecyList = await fetchCurrencyList();
      setCurrencyList(currecyList);
    };

    getCurrencyList();
  }, []);

  return { currencyList };
};
