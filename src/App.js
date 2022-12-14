import "./App.css";
import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { SwapVert } from "@material-ui/icons";

import { useCurrencyList } from "./hooks";
import SelectCurrency from "./components/SelectCurrency";
import ProgressSpinner from "./components/ProgressSpinner";
import ConversionSummary from "./components/ConversionSummary";

const DEFAULT_AMOUNT = 50;
const DEFAULT_BASE_CURRENCY = "PLN";
const DEFAULT_EXCHANGE_CURRENCY = "USD";

function App() {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [baseCurrency, setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [exchangeCurrency, setExchangeCurrency] = useState(
    DEFAULT_EXCHANGE_CURRENCY
  );

  const { currencyList } = useCurrencyList();

  const handleFromChange = ({ target }) => {
    setBaseCurrency(target.value);
  };

  const handleToChange = ({ target }) => {
    setExchangeCurrency(target.value);
  };

  const handleAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const swapCurrencies = () => {
    setBaseCurrency(exchangeCurrency);
    setExchangeCurrency(baseCurrency);
  };

  const renderAppContent = () => {
    if (!currencyList.length) {
      return <ProgressSpinner />;
    }

    return (
      <div className="CurrencyConverter">
        <ConversionSummary
          amount={amount}
          baseCurrency={baseCurrency}
          exchangeCurrency={exchangeCurrency}
        />
        <TextField
          id="amount"
          label="Amount"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={amount}
          onChange={handleAmountChange}
          variant="outlined"
        />
        <SelectCurrency
          id="from"
          list={currencyList}
          value={baseCurrency}
          onChange={handleFromChange}
        />
        <Button
          startIcon={<SwapVert />}
          variant="outlined"
          onClick={swapCurrencies}
        >
          Swap currencies
        </Button>
        <SelectCurrency
          id="to"
          list={currencyList}
          value={exchangeCurrency}
          onChange={handleToChange}
        />
      </div>
    );
  };

  return <div className="App">{renderAppContent()}</div>;
}

export default App;
