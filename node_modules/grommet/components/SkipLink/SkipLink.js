'use strict';

exports.__esModule = true;
exports.SkipLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Anchor = require('../Anchor');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SkipLink = function SkipLink(_ref) {
  var id = _ref.id,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['id', 'label']);

  return _react2.default.createElement(
    _Box.Box,
    { margin: 'small' },
    _react2.default.createElement(_Anchor.Anchor, _extends({
      href: '#' + id,
      label: label
    }, rest))
  );
};
exports.SkipLink = SkipLink;