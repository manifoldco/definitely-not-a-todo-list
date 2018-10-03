'use strict';

exports.__esModule = true;
exports.evalStyle = exports.inputStyle = exports.focusStyle = exports.edgeStyle = exports.controlBorderStyle = exports.baseStyle = exports.activeStyle = undefined;

var _styledComponents = require('styled-components');

var _colors = require('./colors');

var _mixins = require('./mixins');

var _background = require('./background');

var activeStyle = exports.activeStyle = (0, _styledComponents.css)(['', ' color:', ';'], function (props) {
  return (0, _background.backgroundStyle)((0, _colors.normalizeColor)(props.theme.global.hover.background, props.theme), props.theme);
}, function (props) {
  return (0, _colors.normalizeColor)(props.theme.global.hover.color, props.theme);
});

var baseStyle = exports.baseStyle = (0, _styledComponents.css)(['font-family:', ';font-size:', ';line-height:', ';', ' ', ' box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;'], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return props.theme.global.font.size;
}, function (props) {
  return props.theme.global.font.height;
}, function (props) {
  return props.theme.global.colors.text && 'color: ' + props.theme.global.colors.text + ';';
}, function (props) {
  return props.theme.global.colors.background && 'background: ' + props.theme.global.colors.background + ';';
});

var controlBorderStyle = exports.controlBorderStyle = (0, _styledComponents.css)(['border:', ' solid ', ';border-radius:', ';'], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return (props.theme.global.control.border.color || props.theme.global.control.border.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.global.control.border.radius;
});

var edgeStyle = exports.edgeStyle = function edgeStyle(kind, data, responsive, theme) {
  if (typeof data === 'string') {
    return (0, _styledComponents.css)(['', ':', ';', ''], kind, theme.global.edgeSize[data], responsive ? (0, _mixins.palm)('\n        ' + kind + ': ' + theme.global.edgeSize.narrow[data] + ';\n      ') : '');
  }
  var result = [];
  if (data.horizontal) {
    result.push((0, _styledComponents.css)(['', '-left:', ';', '-right:', ';', ''], kind, theme.global.edgeSize[data.horizontal], kind, theme.global.edgeSize[data.horizontal], responsive ? (0, _mixins.palm)('\n        ' + kind + '-left: ' + theme.global.edgeSize.narrow[data.horizontal] + ';\n        ' + kind + '-right: ' + theme.global.edgeSize.narrow[data.horizontal] + ';\n      ') : ''));
  }
  if (data.vertical) {
    result.push((0, _styledComponents.css)(['', '-top:', ';', '-bottom:', ';', ''], kind, theme.global.edgeSize[data.vertical], kind, theme.global.edgeSize[data.vertical], responsive ? (0, _mixins.palm)('\n        ' + kind + '-top: ' + theme.global.edgeSize.narrow[data.vertical] + ';\n        ' + kind + '-bottom: ' + theme.global.edgeSize.narrow[data.vertical] + ';\n      ') : ''));
  }
  if (data.top) {
    result.push((0, _styledComponents.css)(['', '-top:', ';', ''], kind, theme.global.edgeSize[data.top], responsive ? (0, _mixins.palm)('\n        ' + kind + '-top: ' + theme.global.edgeSize.narrow[data.top] + ';\n      ') : ''));
  }
  if (data.bottom) {
    result.push((0, _styledComponents.css)(['', '-bottom:', ';', ''], kind, theme.global.edgeSize[data.bottom], responsive ? (0, _mixins.palm)('\n        ' + kind + '-bottom: ' + theme.global.edgeSize.narrow[data.bottom] + ';\n      ') : ''));
  }
  if (data.left) {
    result.push((0, _styledComponents.css)(['', '-left:', ';', ''], kind, theme.global.edgeSize[data.left], responsive ? (0, _mixins.palm)('\n        ' + kind + '-left: ' + theme.global.edgeSize.narrow[data.left] + ';\n      ') : ''));
  }
  if (data.right) {
    result.push((0, _styledComponents.css)(['', '-right:', ';', ''], kind, theme.global.edgeSize[data.right], responsive ? (0, _mixins.palm)('\n        ' + kind + '-right: ' + theme.global.edgeSize.narrow[data.left] + ';\n      ') : ''));
  }
  return result;
};

// focus also supports clickable elements inside svg
var focusStyle = exports.focusStyle = (0, _styledComponents.css)(['> circle,> ellipse,> line,> path,> polygon,> polyline,> rect{outline:', ' solid 2px;}border-color:', ';box-shadow:0 0 2px 2px ', ';'], function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
});

var inputStyle = exports.inputStyle = (0, _styledComponents.css)(['box-sizing:border-box;font-size:inherit;border:none;-webkit-appearance:none;padding:', 'px;outline:none;background:transparent;color:inherit;', ' margin:0;', ' ', '::-webkit-search-decoration{-webkit-appearance:none;}'], function (props) {
  return (0, _mixins.parseMetricToNum)(props.theme.global.spacing) / 2 - (0, _mixins.parseMetricToNum)(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.global.input.weight && (0, _styledComponents.css)(['font-weight:', ';'], props.theme.global.input.weight);
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, controlBorderStyle);

var evalStyle = exports.evalStyle = function evalStyle(arg, theme) {
  if (arg && Array.isArray(arg) && typeof arg[0] === 'function') {
    return arg[0]({ theme: theme });
  }
  return arg;
};