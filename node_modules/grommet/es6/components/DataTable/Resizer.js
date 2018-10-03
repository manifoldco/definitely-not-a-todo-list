var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import { Box } from '../Box';

var ResizerBox = styled(Box).withConfig({
  displayName: 'Resizer__ResizerBox',
  componentId: 'sc-8l808w-0'
})(['cursor:col-resize;']);

export var Resizer = function (_Component) {
  _inherits(Resizer, _Component);

  function Resizer() {
    var _temp, _this, _ret;

    _classCallCheck(this, Resizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.ref = React.createRef(), _this.onMouseDown = function (event) {
      if (_this.ref.current) {
        var element = findDOMNode(_this.ref.current);
        var rect = element.getBoundingClientRect();
        _this.setState({ start: event.clientX, width: rect.width }, function () {
          document.addEventListener('mousemove', _this.onMouseMove);
          document.addEventListener('mouseup', _this.onMouseUp);
        });
      }
    }, _this.onMouseMove = function (event) {
      var property = _this.props.property;
      var width = _this.state.width;
      // We determined 12 empirically as being wide enough to hit but
      // not too wide to cause false hits.

      var nextWidth = Math.max(12, width + (event.clientX - _this.state.start));
      _this.props.onResize(property)(nextWidth);
    }, _this.onMouseUp = function () {
      document.removeEventListener('mouseup', _this.onMouseUp);
      document.removeEventListener('mousemove', _this.onMouseMove);
      _this.setState({ start: undefined, width: undefined });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Resizer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        onResize = _props.onResize,
        theme = _props.theme;
    var start = this.state.start;

    if (onResize) {
      return React.createElement(
        Box,
        { ref: this.ref, direction: 'row', fill: true },
        children,
        React.createElement(ResizerBox, _extends({
          flex: false
        }, theme.dataTable.resize, {
          onMouseDown: this.onMouseDown,
          onMouseMove: start ? this.onMouseMove : undefined,
          onMouseUp: start ? this.onMouseUp : undefined
        }))
      );
    }
    return children;
  };

  return Resizer;
}(Component);