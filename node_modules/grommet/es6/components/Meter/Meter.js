var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import { Bar } from './Bar';
import { Circle } from './Circle';

var deriveMax = function deriveMax(values) {
  var max = 100;
  if (values && values.length > 1) {
    max = 0;
    values.forEach(function (v) {
      max += v.value;
    });
  }
  return max;
};

var Meter = function (_Component) {
  _inherits(Meter, _Component);

  function Meter() {
    var _temp, _this, _ret;

    _classCallCheck(this, Meter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Meter.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var max = prevState.max;

    var nextMax = deriveMax(nextProps.values);
    if (!max || nextMax !== max) {
      return { max: nextMax };
    }
    return null;
  };

  Meter.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['type']);

    var max = this.state.max;


    var content = void 0;
    if (type === 'bar') {
      content = React.createElement(Bar, _extends({ max: max }, rest));
    } else if (type === 'circle') {
      content = React.createElement(Circle, _extends({ max: max }, rest));
    }

    return content;
  };

  return Meter;
}(Component);

Meter.defaultProps = {
  background: { color: 'light-1', opacity: 'medium' },
  size: 'medium',
  thickness: 'medium',
  type: 'bar'
};


var MeterDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  MeterDoc = require('./doc').doc(Meter); // eslint-disable-line global-require
}
var MeterWrapper = compose(withTheme)(MeterDoc || Meter);

export { MeterWrapper as Meter };