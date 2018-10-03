'use strict';

exports.__esModule = true;
exports.ArrowDown = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowDown = exports.ArrowDown = function ArrowDown(props) {
  return _react2.default.createElement(
    'svg',
    _extends({ width: '10', height: '20', fill: 'rgba(0, 0, 0, 0.54)' }, props),
    _react2.default.createElement('path', { d: 'm0,7.5l5,5l5,-5l-10,0z' })
  );
};