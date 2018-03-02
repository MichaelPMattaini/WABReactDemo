import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './ErrorMessage';

import { sentry } from '../utils';

const propTypes = {
  children: PropTypes.element.isRequired,
};

export default class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = propTypes;
