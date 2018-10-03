var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { css } from 'styled-components';
import React, { Component } from 'react';

import { Box } from '../../../';

import { ThemeContext } from '../../../../contexts';
import { colorForName } from '../../../../utils';

var searchingStyle = css(['position:relative;outline:none;box-shadow:none;&:before{content:\'\';position:absolute;bottom:0;left:0;width:100%;height:2px;background:', ';}&:after{content:\'\';position:absolute;bottom:0;left:0;width:100%;height:2px;will-change:left,right;background:', ';animation:progress 1.5s cubic-bezier(0.4,0,0.2,1) infinite;transform:translateX(-50%) scaleX(0);}@keyframes progress{0%{transform:translateX(-50%) scaleX(0);}50%{transform:translateX(12.5%) scaleX(.75);}100%{transform:translateX(50%) scaleX(0);}}'], function (props) {
  return colorForName('light-2', props.theme);
}, function (props) {
  return colorForName('brand', props.theme);
});

var defaultStyle = css(['position:relative;outline:none;&:after{content:\'\';position:absolute;bottom:0;left:50%;width:0;height:2px;background:transparent;transition:width .2s ease,background .2s ease,left .2s ease;}', ''], function (props) {
  return props.focus && '\n    box-shadow: none;\n    &:after {\n      left: 0;\n      width: 100%;\n      background: ' + colorForName('brand', props.theme) + ';\n    }\n  ';
});

var boxBorderTheme = {
  box: {
    extend: function extend(props) {
      return props.searching ? searchingStyle : defaultStyle;
    }
  }
};

export var SearchBorderBox = function (_Component) {
  _inherits(SearchBorderBox, _Component);

  function SearchBorderBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, SearchBorderBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SearchBorderBox.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        searching = _props.searching,
        rest = _objectWithoutProperties(_props, ['children', 'searching']);

    var focus = this.state.focus;

    return React.createElement(
      ThemeContext.Extend,
      { value: boxBorderTheme },
      React.createElement(
        Box,
        _extends({
          focus: focus,
          searching: searching,
          onFocus: function onFocus() {
            return _this2.setState({ focus: true });
          },
          onBlur: function onBlur() {
            return _this2.setState({ focus: false });
          }
        }, rest),
        children
      )
    );
  };

  return SearchBorderBox;
}(Component);