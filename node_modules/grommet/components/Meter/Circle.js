'use strict';

exports.__esModule = true;
exports.Circle = undefined;

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

var Circle = exports.Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Circle.prototype.render = function render() {
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
    var mid = width / 2;
    var radius = width / 2 - height / 2;
    var anglePer = 360 / max;
    var someHighlight = (values || []).some(function (v) {
      return v.highlight;
    });

    var startValue = 0;
    var startAngle = 0;
    var paths = [];
    var pathCaps = [];
    (values || []).filter(function (v) {
      return v.value > 0;
    }).forEach(function (valueArg, index) {
      var color = valueArg.color,
          highlight = valueArg.highlight,
          label = valueArg.label,
          onHover = valueArg.onHover,
          value = valueArg.value,
          pathRest = _objectWithoutProperties(valueArg, ['color', 'highlight', 'label', 'onHover', 'value']);

      var key = 'p-' + index;
      var colorName = color || (index === values.length - 1 ? 'accent-1' : (0, _utils2.defaultColor)(index, theme));

      var endAngle = void 0;
      if (startValue + value >= max) {
        endAngle = 360;
      } else {
        endAngle = Math.min(360, (0, _utils.translateEndAngle)(startAngle, anglePer, value));
      }
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
      var stroke = (0, _utils2.strokeProps)(someHighlight && !highlight ? background : colorName, theme);

      if (round) {
        var d1 = (0, _utils.arcCommands)(width / 2, width / 2, radius, startAngle, endAngle);
        paths.unshift(_react2.default.createElement('path', _extends({
          key: key,
          d: d1,
          fill: 'none'
        }, stroke, {
          strokeWidth: height,
          strokeLinecap: 'round'
        }, hoverProps, pathRest)));

        // To handle situations where the last values are small, redraw
        // a dot at the end. Give just a bit of angle to avoid anti-aliasing
        // leakage around the edge.
        var d2 = (0, _utils.arcCommands)(width / 2, width / 2, radius, endAngle - 0.5, endAngle);
        var pathCap = _react2.default.createElement('path', _extends({
          key: key + '-',
          d: d2,
          fill: 'none'
        }, stroke, {
          strokeWidth: height,
          strokeLinecap: 'round'
        }, hoverProps, pathRest));
        // If we are on a large enough path to not need re-drawing previous ones,
        // clear the pathCaps we've collected already.
        if (endAngle - startAngle > 2 * anglePer) {
          pathCaps = [];
        }
        pathCaps.unshift(pathCap);
      } else {
        var d = (0, _utils.arcCommands)(width / 2, width / 2, radius, startAngle, endAngle);
        paths.push(_react2.default.createElement('path', _extends({
          key: key,
          d: d,
          fill: 'none'
        }, stroke, {
          strokeWidth: height,
          strokeLinecap: 'butt'
        }, hoverProps, pathRest)));
      }
      startValue += value;
      startAngle = endAngle;
    });

    return _react2.default.createElement(
      _StyledMeter.StyledMeter,
      _extends({
        viewBox: '0 0 ' + width + ' ' + width,
        width: size === 'full' ? '100%' : width,
        height: size === 'full' ? '100%' : width,
        theme: theme
      }, rest),
      _react2.default.createElement('circle', _extends({
        cx: mid,
        cy: mid,
        r: radius
      }, (0, _utils2.strokeProps)(background, theme), {
        strokeWidth: height,
        strokeLinecap: round ? 'round' : 'square',
        fill: 'none'
      })),
      paths,
      pathCaps
    );
  };

  return Circle;
}(_react.Component);