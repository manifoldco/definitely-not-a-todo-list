'use strict';

exports.__esModule = true;
exports.Analog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

var _StyledClock = require('./StyledClock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// this will serve both minutes and hours (360 / 6)
var ANGLE_UNIT = 6;
// 360 / 12
var HOUR_ANGLE_UNIT = 30;

var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: (0, _utils.parseMetricToNum)(theme.clock.analog.size.medium),
    secondSize: (0, _utils.parseMetricToNum)(theme.clock.analog.second.size),
    minuteSize: (0, _utils.parseMetricToNum)(theme.clock.analog.minute.size),
    hourSize: (0, _utils.parseMetricToNum)(theme.clock.analog.hour.size)
  };
};

var getClockState = function getClockState(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;

  var hour12 = hours > 12 ? hours - 12 : hours;
  var minuteAngle = minutes * ANGLE_UNIT;

  return {
    // offset hour angle by half of the minute angle so that it gets closer to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minutes / 2,
    minuteAngle: minuteAngle,
    secondAngle: seconds * ANGLE_UNIT
  };
};

var Analog = exports.Analog = function (_Component) {
  _inherits(Analog, _Component);

  function Analog() {
    var _temp, _this, _ret;

    _classCallCheck(this, Analog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Analog.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var elements = nextProps.elements;

    var nextState = getClockState(elements);
    if (prevState.hourAngle === undefined || Object.keys(nextState).some(function (k) {
      return prevState[k] !== nextState[k];
    })) {
      return nextState;
    }
    return null;
  };

  Analog.prototype.render = function render() {
    var _props = this.props,
        precision = _props.precision,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['precision', 'theme']);

    var _state = this.state,
        hourAngle = _state.hourAngle,
        minuteAngle = _state.minuteAngle,
        secondAngle = _state.secondAngle;

    var _getClockDimensions = getClockDimensions(theme),
        size = _getClockDimensions.size,
        secondSize = _getClockDimensions.secondSize,
        minuteSize = _getClockDimensions.minuteSize,
        hourSize = _getClockDimensions.hourSize;

    var halfSize = size / 2;

    var secondHand = void 0;
    if (precision === 'seconds') {
      secondHand = _react2.default.createElement(_StyledClock.StyledSecond, {
        theme: theme,
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: secondSize,
        stroke: '#000000',
        strokeLinecap: theme.clock.analog.second.shape,
        style: {
          transform: 'rotate(' + secondAngle + 'deg)',
          transformOrigin: halfSize + 'px ' + halfSize + 'px'
        }
      });
    }

    var minuteHand = void 0;
    if (precision === 'seconds' || precision === 'minutes') {
      minuteHand = _react2.default.createElement(_StyledClock.StyledMinute, {
        theme: theme,
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: minuteSize,
        stroke: '#000000',
        strokeLinecap: theme.clock.analog.minute.shape,
        style: {
          transform: 'rotate(' + minuteAngle + 'deg)',
          transformOrigin: halfSize + 'px ' + halfSize + 'px'
        }
      });
    }

    return _react2.default.createElement(
      _StyledClock.StyledAnalog,
      _extends({
        version: '1.1',
        width: size,
        height: size,
        preserveAspectRatio: 'xMidYMid meet',
        viewBox: '0 0 ' + size + ' ' + size,
        theme: theme
      }, rest),
      secondHand,
      minuteHand,
      _react2.default.createElement(_StyledClock.StyledHour, {
        theme: theme,
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: hourSize,
        stroke: '#000000',
        strokeLinecap: theme.clock.analog.hour.shape,
        style: {
          transform: 'rotate(' + hourAngle + 'deg)',
          transformOrigin: halfSize + 'px ' + halfSize + 'px'
        }
      })
    );
  };

  return Analog;
}(_react.Component);

Analog.defaultProps = {
  size: 'medium'
};