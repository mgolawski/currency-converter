import React, { Component } from "react";
import PropTypes from "prop-types";

import ErrorSummary from "../ErrorSummary";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    const { error, errorInfo, hasError } = this.state;

    if (hasError) {
      return (
        <ErrorSummary
          message={error.toString()}
          componentStack={errorInfo.componentStack}
        />
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
