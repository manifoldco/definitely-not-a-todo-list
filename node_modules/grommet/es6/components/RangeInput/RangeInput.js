var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFocus, withForwardRef, withTheme } from '../hocs';

import { StyledRangeInput } from './StyledRangeInput';

var RangeInput = function (_Component) {
  _inherits(RangeInput, _Component);

  function RangeInput() {
    _classCallCheck(this, RangeInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RangeInput.prototype.render = function render() {
    var _props = this.props,
        forwardRef = _props.forwardRef,
        rest = _objectWithoutProperties(_props, ['forwardRef']);

    return React.createElement(StyledRangeInput, _extends({}, rest, {
      ref: forwardRef,
      type: 'range'
    }));
  };

  return RangeInput;
}(Component);

var RangeInputDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  RangeInputDoc = require('./doc').doc(RangeInput); // eslint-disable-line global-require
}
var RangeInputWrapper = compose(withFocus, withTheme, withForwardRef)(RangeInputDoc || RangeInput);

export { RangeInputWrapper as RangeInput };