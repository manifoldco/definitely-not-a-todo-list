var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

import { getBodyChildElements, makeNodeFocusable, makeNodeUnfocusable } from '../utils';

var isNotAncestorOf = function isNotAncestorOf(child) {
  return function (parent) {
    return !parent.contains(child);
  };
};

export var FocusedContainer = function (_Component) {
  _inherits(FocusedContainer, _Component);

  function FocusedContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, FocusedContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.ref = React.createRef(), _this.removeTrap = function () {
      var restrictScroll = _this.props.restrictScroll;

      var child = findDOMNode(_this.ref.current);
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeFocusable);
      if (restrictScroll) {
        document.body.style.overflow = _this.bodyOverflowStyle;
      }
    }, _this.trapFocus = function () {
      var restrictScroll = _this.props.restrictScroll;

      var child = findDOMNode(_this.ref.current);
      getBodyChildElements().filter(isNotAncestorOf(child)).forEach(makeNodeUnfocusable);

      if (restrictScroll) {
        _this.bodyOverflowStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FocusedContainer.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var hidden = this.props.hidden;
    // making sure trap focus always execute
    // after removeTrap for the case where two drops
    // are open at the same time

    setTimeout(function () {
      if (!hidden) {
        _this2.trapFocus();
      }
    }, 0);
  };

  FocusedContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeTrap();
  };

  FocusedContainer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['children']);

    delete rest.restrictScroll;
    return React.createElement(
      'div',
      _extends({ ref: this.ref }, rest),
      children
    );
  };

  return FocusedContainer;
}(Component);
FocusedContainer.defaultProps = {
  hidden: false,
  restrictScroll: false
};
FocusedContainer.propTypes = {
  hidden: PropTypes.bool,
  restrictScroll: PropTypes.bool
};