import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

import '../css/App.css';

import { sentry } from '../utils';

const propTypes = {
  wab: PropTypes.object,
  esriJS: PropTypes.object,
};

const defaultProps = {
  wab: {},
  esriJS: {},
};

export default class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    console.info('Sentry is initialized: ', sentry.isSetup());
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <MyComponent
            title="WAB Widget"
            wab={this.props.wab}
            esriJS={this.props.esriJS}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
