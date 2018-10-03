var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

var RoutedButton = function (_Component) {
  _inherits(RoutedButton, _Component);

  function RoutedButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, RoutedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  RoutedButton.prototype.render = function render() {
    var _props = this.props,
        href = _props.href,
        path = _props.path,
        method = _props.method,
        onClick = _props.onClick,
        rest = _objectWithoutProperties(_props, ['href', 'path', 'method', 'onClick']);

    return React.createElement(Button, _extends({}, rest, {
      href: path || href,
      onClick: path || onClick ? this.onClick : undefined
    }));
  };

  return RoutedButton;
}(Component);

RoutedButton.contextTypes = {
  router: PropTypes.object.isRequired
};
RoutedButton.defaultProps = {
  method: 'push'
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClick = function (event) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var _props2 = _this2.props,
        method = _props2.method,
        onClick = _props2.onClick,
        path = _props2.path;
    var router = _this2.context.router;

    if (event) {
      var modifierKey = event.ctrlKey || event.metaKey;

      // if the user right-clicked in the button we should let it go
      if (modifierKey) {
        return;
      }
    }
    if (router) {
      event.preventDefault();
      (router.history || router)[method](path);
    }
    if (onClick) {
      onClick.apply(undefined, [event].concat(args));
    }
  };
};

var RoutedButtonDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  RoutedButtonDoc = require('./doc').doc(RoutedButton); // eslint-disable-line global-require
}
var RoutedButtonWrapper = RoutedButtonDoc || RoutedButton;

export { RoutedButtonWrapper as RoutedButton };