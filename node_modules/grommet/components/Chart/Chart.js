'use strict';

exports.__esModule = true;
exports.Chart = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _utils = require('../../utils');

var _hocs = require('../hocs');

var _StyledChart = require('./StyledChart');

var _utils2 = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderBars = function renderBars(values, bounds, scale, height) {
  return (values || []).map(function (valueArg, index) {
    var label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        rest = _objectWithoutProperties(valueArg, ['label', 'onHover', 'value']);

    var key = 'p-' + index;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    var top = value.length === 2 ? value[1] : value[2];
    if (top !== 0) {
      var d = 'M ' + (value[0] - bounds[0][0]) * scale[0] + ',' + ('' + (height - (bottom - bounds[1][0]) * scale[1])) + (' L ' + (value[0] - bounds[0][0]) * scale[0] + ',') + ('' + (height - (top - bounds[1][0]) * scale[1]));

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

      return _react2.default.createElement(
        'g',
        { key: key, fill: 'none' },
        _react2.default.createElement(
          'title',
          null,
          label
        ),
        _react2.default.createElement('path', _extends({ d: d }, hoverProps, rest))
      );
    }
    return undefined;
  });
};

var renderLine = function renderLine(values, bounds, scale, height, _ref) {
  var onClick = _ref.onClick,
      onHover = _ref.onHover;

  var d = '';
  (values || []).forEach(function (_ref2, index) {
    var value = _ref2.value;

    d += (index ? ' L' : 'M') + ' ' + (value[0] - bounds[0][0]) * scale[0] + ',' + ('' + (height - (value[1] - bounds[1][0]) * scale[1]));
  });

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
  var clickProps = void 0;
  if (onClick) {
    clickProps = { onClick: onClick };
  }

  return _react2.default.createElement(
    'g',
    { fill: 'none' },
    _react2.default.createElement('path', _extends({ d: d }, hoverProps, clickProps))
  );
};

var renderArea = function renderArea(values, bounds, scale, height, _ref3) {
  var color = _ref3.color,
      onClick = _ref3.onClick,
      onHover = _ref3.onHover,
      theme = _ref3.theme;

  var d = '';
  (values || []).forEach(function (_ref4, index) {
    var value = _ref4.value;

    var top = value.length === 2 ? value[1] : value[2];
    d += (!index ? 'M' : ' L') + ' ' + (value[0] - bounds[0][0]) * scale[0] + ',' + ('' + (height - (top - bounds[1][0]) * scale[1]));
  });
  (values || []).reverse().forEach(function (_ref5) {
    var value = _ref5.value;

    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    d += ' L ' + (value[0] - bounds[0][0]) * scale[0] + ',' + ('' + (height - (bottom - bounds[1][0]) * scale[1]));
  });
  if (d.length > 0) {
    d += ' Z';
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
  var clickProps = void 0;
  if (onClick) {
    clickProps = { onClick: onClick };
  }

  return _react2.default.createElement(
    'g',
    { fill: (0, _utils.colorForName)(color.color || color, theme) },
    _react2.default.createElement('path', _extends({ d: d }, hoverProps, clickProps))
  );
};

var Chart = function (_Component) {
  _inherits(Chart, _Component);

  function Chart() {
    var _temp, _this, _ret;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { containerWidth: 0, containerHeight: 0 }, _this.onResize = function () {
      var containerNode = (0, _reactDom.findDOMNode)(_this.containerRef);
      if (containerNode) {
        var parentNode = containerNode.parentNode;
        if (parentNode) {
          var rect = parentNode.getBoundingClientRect();
          _this.setState({ containerWidth: rect.width, containerHeight: rect.height });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Chart.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var bounds = nextProps.bounds,
        values = nextProps.values;
    var stateBounds = prevState.bounds,
        stateValues = prevState.values;

    if (!stateValues || values !== stateValues || bounds !== stateBounds) {
      var nextValues = (0, _utils2.normalizeValues)(values);
      var nextBounds = (0, _utils2.normalizeBounds)(bounds, nextValues);
      return { bounds: nextBounds, values: nextValues };
    }
    return null;
  };

  Chart.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  Chart.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  Chart.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        color = _props.color,
        onClick = _props.onClick,
        onHover = _props.onHover,
        overflow = _props.overflow,
        round = _props.round,
        size = _props.size,
        theme = _props.theme,
        thickness = _props.thickness,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['color', 'onClick', 'onHover', 'overflow', 'round', 'size', 'theme', 'thickness', 'type']);

    delete rest.values;
    var _state = this.state,
        bounds = _state.bounds,
        containerWidth = _state.containerWidth,
        containerHeight = _state.containerHeight,
        values = _state.values;


    var sizeWidth = typeof size === 'string' ? size : size.width || 'medium';
    var sizeHeight = typeof size === 'string' ? size : size.height || 'medium';
    var width = sizeWidth === 'full' ? containerWidth : (0, _utils.parseMetricToNum)(theme.global.size[sizeWidth]);
    var height = sizeHeight === 'full' ? containerHeight : (0, _utils.parseMetricToNum)(theme.global.size[sizeHeight]);
    var strokeWidth = (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness]);
    var scale = [width / (bounds[0][1] - bounds[0][0]), height / (bounds[1][1] - bounds[1][0])];
    var viewBox = overflow ? '0 0 ' + width + ' ' + height : '-' + strokeWidth / 2 + ' -' + strokeWidth / 2 + ' ' + (width + strokeWidth) + ' ' + (height + strokeWidth);
    var colorName = (typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object' ? color.color : color;
    var opacity = color.opacity ? theme.global.opacity[color.opacity] : undefined;

    var contents = void 0;
    if (type === 'bar') {
      contents = renderBars(values, bounds, scale, height);
    } else if (type === 'line') {
      contents = renderLine(values, bounds, scale, height, this.props);
    } else if (type === 'area') {
      contents = renderArea(values, bounds, scale, height, this.props);
    }

    return _react2.default.createElement(
      _StyledChart.StyledChart,
      _extends({
        ref: function ref(_ref6) {
          _this2.containerRef = _ref6;
        },
        viewBox: viewBox,
        preserveAspectRatio: 'none',
        width: size === 'full' ? '100%' : width,
        height: size === 'full' ? '100%' : height
      }, rest),
      _react2.default.createElement(
        'g',
        {
          stroke: (0, _utils.colorForName)(colorName, theme),
          strokeWidth: strokeWidth,
          strokeLinecap: round ? 'round' : 'butt',
          strokeLinejoin: round ? 'round' : 'miter',
          opacity: opacity
        },
        contents
      )
    );
  };

  return Chart;
}(_react.Component);

Chart.defaultProps = {
  color: 'accent-1',
  overflow: false,
  size: { width: 'medium', height: 'small' },
  thickness: 'medium',
  type: 'bar'
};


var ChartDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  ChartDoc = require('./doc').doc(Chart); // eslint-disable-line global-require
}
var ChartWrapper = (0, _recompose.compose)(_hocs.withTheme)(ChartDoc || Chart);

exports.Chart = ChartWrapper;