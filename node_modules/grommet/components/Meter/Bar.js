'use strict';

exports.__esModule = true;
exports.Bar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

var _StyledMeter = require('./StyledMeter');

var _utils2 = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = exports.Bar = function (_Component) {
  _inherits(Bar, _Component);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Bar.prototype.render = function render() {
    var _props = this.props,
        background = _props.background,
        max = _props.max,
        round = _props.round,
        size = _props.size,
        theme = _props.theme,
        thickness = _props.thickness,
        values = _props.values,
        rest = _objectWithoutProperties(_props, ['background', 'max', 'round', 'size', 'theme', 'thickness', 'values']);

    var width = size === 'full' ? 288 : (0, _utils.parseMetricToNum)(theme.global.size[size]);
    var height = (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness]);
    // account for the round cap, if any
    var capOffset = round ? height / 2 : 0;
    var mid = height / 2;
    var someHighlight = (values || []).some(function (v) {
      return v.highlight;
    });

    var start = capOffset;
    var paths = (values || []).filter(function (v) {
      return v.value > 0;
    }).map(function (valueArg, index) {
      var color = valueArg.color,
          highlight = valueArg.highlight,
          label = valueArg.label,
          onHover = valueArg.onHover,
          value = valueArg.value,
          pathRest = _objectWithoutProperties(valueArg, ['color', 'highlight', 'label', 'onHover', 'value']);

      var key = 'p-' + index;
      var delta = value * (width - 2 * capOffset) / max;
      var d = 'M ' + start + ',' + mid + ' L ' + (start + delta) + ',' + mid;
      var colorName = color || (index === values.length - 1 ? 'accent-1' : (0, _utils2.defaultColor)(index, theme));
      var hoverProps = void 0;
      if (onHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(false);
          }
        };
      }
      start += delta;

      return _react2.default.createElement('path', _extends({
        key: key,
        d: d,
        fill: 'none'
      }, (0, _utils2.strokeProps)(someHighlight && !highlight ? background : colorName, theme), {
        strokeWidth: height,
        strokeLinecap: round ? 'round' : 'butt'
      }, hoverProps, pathRest));
    }).reverse(); // reverse so the caps looks right

    return _react2.default.createElement(
      _StyledMeter.StyledMeter,
      _extends({
        viewBox: '0 0 ' + width + ' ' + height,
        preserveAspectRatio: 'none',
        width: size === 'full' ? '100%' : width,
        height: height,
        round: round ? { size: thickness } : undefined,
        theme: theme
      }, rest),
      _react2.default.createElement('path', _extends({
        d: 'M ' + capOffset + ',' + mid + ' L ' + (width - capOffset) + ',' + mid,
        fill: 'none'
      }, (0, _utils2.strokeProps)(background, theme), {
        strokeWidth: height,
        strokeLinecap: round ? 'round' : 'square'
      })),
      paths
    );
  };

  return Bar;
}(_react.Component);

Bar.defaultProps = {
  background: 'light-1'
};