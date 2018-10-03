function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { compose } from 'recompose';

import { getNewContainer } from '../../utils';
import { withTheme } from '../hocs';

import { LayerContainer } from './LayerContainer';

var Layer = function (_Component) {
  _inherits(Layer, _Component);

  function Layer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Layer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.originalFocusedElement = document.activeElement, _this.layerContainer = getNewContainer(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Layer.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }
    document.body.removeChild(this.layerContainer);
  };

  Layer.prototype.render = function render() {
    var _props = this.props,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['theme']);

    return createPortal(React.createElement(LayerContainer, rest), this.layerContainer);
  };

  return Layer;
}(Component);

Layer.defaultProps = {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center',
  responsive: true
};


var LayerDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  LayerDoc = require('./doc').doc(Layer); // eslint-disable-line global-require
}
var LayerWrapper = compose(withTheme)(LayerDoc || Layer);

export { LayerWrapper as Layer };