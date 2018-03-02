import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  msg: PropTypes.string,
};

const defaultProps = {
  msg: 'Hello World',
};

export default class MyChildComponent extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.msg}</h3>
      </div>
    );
  }
}

MyChildComponent.propTypes = propTypes;
MyChildComponent.defaultProps = defaultProps;
