import { PropTypes } from "prop-types";
import { Typography } from "@material-ui/core";

import { useCurrencyConverter } from "../../hooks";

const ConversionSummary = ({ amount, baseCurrency, exchangeCurrency }) => {
  const { convertedCurrency } = useCurrencyConverter(
    amount,
    baseCurrency,
    exchangeCurrency
  );

  return (
    <div className="ConversionSummary">
      <Typography variant="h5" color="textPrimary">
        {amount} {baseCurrency} equals
      </Typography>
      <Typography variant="h5">
        {convertedCurrency} {exchangeCurrency}
      </Typography>
    </div>
  );
};

ConversionSummary.propTypes = {
  amount: PropTypes.number.isRequired,
  baseCurrency: PropTypes.string.isRequired,
  exchangeCurrency: PropTypes.string.isRequired,
};

export default ConversionSummary;
