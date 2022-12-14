// Generic error component

import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const ErrorSummary = ({ message, componentStack }) => (
  <div className="ErrorSummary" role="alert">
    <Typography variant="h6" component="p">
      Oops, something went wrong.
    </Typography>
    <Typography variant="body2" component="p">
      <span>{message}</span>
      <span>{componentStack} asdafsafsa</span>
    </Typography>
  </div>
);

ErrorSummary.propTypes = {
  message: PropTypes.string.isRequired,
  componentStack: PropTypes.string.isRequired,
};

export default ErrorSummary;
