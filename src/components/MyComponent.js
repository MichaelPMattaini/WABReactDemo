import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MyChildComponent from './MyChildComponent';

import { loadLayers, sentry } from '../utils';

const propTypes = {
  title: PropTypes.string,
  wab: PropTypes.object,
  esriJS: PropTypes.object,
};

const defaultProps = {
  title: 'Hello',
  wab: {},
  esriJS: {},
};

export default class MyComponent extends Component {
  state = {
    msg: 'WAB',
    layers: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    // load layers
    this.loadSetLayers();

    this.updateMsg();
  }

  updateMsg = () => {
    setInterval(() => {
      const { msg } = this.state;
      const newMsg = msg === 'HELLO' ? 'WAB' : 'HELLO';
      this.setState({ msg: newMsg });
    }, 3000);
  };

  loadSetLayers = async () => {
    // Load Layers
    const { wab, esriJS } = this.props;
    try {
      const layers = await loadLayers(
        esriJS,
        wab.map,
        wab.config.layerCollection,
      );
      this.setState({ layers, loading: false });
    } catch (error) {
      this.setState({ error: true });
      sentry.captureException(error);
    }
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="my-react-widget-back">
        <h1>{this.props.title}</h1>
        <MyChildComponent msg={this.state.msg} />
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;
