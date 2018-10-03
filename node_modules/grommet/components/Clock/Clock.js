'use strict';

exports.__esModule = true;
exports.Clock = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _Analog = require('./Analog');

var _Digital = require('./Digital');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME_REGEXP = /T([0-9]{2}):([0-9]{2})(?::([0-9.,]{2,}))?/;
var DURATION_REGEXP = /^(-|\+)?P.*T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?$/;

var parseTime = function parseTime(time, hourLimit) {
  var result = {};
  if (time) {
    var match = DURATION_REGEXP.exec(time);
    if (match) {
      result.hours = parseFloat(match[2]);
      if (hourLimit === 12) {
        result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
      }
      result.minutes = parseFloat(match[3]) || 0;
      result.seconds = parseFloat(match[4]) || 0;
      result.duration = true;
    } else {
      match = TIME_REGEXP.exec(time);
      if (match) {
        result.hours = parseFloat(match[1]);
        if (hourLimit === 12) {
          result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
        }
        result.minutes = parseFloat(match[2]) || 0;
        result.seconds = parseFloat(match[3]) || 0;
      } else {
        console.error('Grommet Clock cannot parse \'' + time + '\'');
      }
    }
  } else {
    var date = new Date();
    result.hours = date.getHours();
    result.minutes = date.getMinutes();
    result.seconds = date.getSeconds();
  }
  return result;
};

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock() {
    var _temp, _this, _ret;

    _classCallCheck(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Clock.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var hourLimit = nextProps.hourLimit,
        time = nextProps.time;
    var elements = prevState.elements;

    if (!elements || time) {
      var nextElements = parseTime(time, hourLimit);
      if (!elements) {
        return { elements: nextElements };
      }
      if (Object.keys(nextElements).some(function (k) {
        return elements[k] !== nextElements[k];
      })) {
        return { elements: nextElements };
      }
    }
    return null;
  };

  Clock.prototype.componentDidMount = function componentDidMount() {
    if (this.props.run) {
      this.run();
    }
  };

  Clock.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var run = this.props.run;

    if (run && !prevProps.run) {
      this.run();
    } else if (!run && prevProps.run) {
      clearInterval(this.timer);
    }
  };

  Clock.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  Clock.prototype.run = function run() {
    var _this2 = this;

    var _props = this.props,
        hourLimit = _props.hourLimit,
        onChange = _props.onChange,
        precision = _props.precision,
        run = _props.run;

    // set the interval time based on the precision

    var interval = 1000;
    var increment = 'seconds';
    if (precision !== 'seconds' && this.state.elements.seconds === 0) {
      interval *= 60;
      increment = 'minutes';
      if (precision !== 'minutes' && this.state.elements.minutes === 0) {
        interval *= 60;
        increment = 'hours';
      }
    }

    clearInterval(this.timer);
    this.timer = setInterval(function () {
      var elements = _this2.state.elements;

      var nextElements = _extends({}, elements);

      // adjust time based on precision
      if (increment === 'seconds') {
        if (run === 'backward') {
          nextElements.seconds -= 1;
        } else {
          nextElements.seconds += 1;
        }
      } else if (increment === 'minutes') {
        if (run === 'backward') {
          nextElements.minutes -= 1;
        } else {
          nextElements.minutes += 1;
        }
      } else if (increment === 'hours') {
        if (run === 'backward') {
          nextElements.hours -= 1;
        } else {
          nextElements.hours += 1;
        }
      }

      // deal with overflows
      if (nextElements.seconds >= 60) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 0;
      } else if (nextElements.seconds < 0) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 59;
      }
      if (nextElements.minutes >= 60) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 0;
      } else if (nextElements.minutes < 0) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 59;
      }
      if (nextElements.hours >= 24 || nextElements.hours < 0) {
        nextElements.hours = 0;
      }
      if (hourLimit === 12) {
        nextElements.hours12 = nextElements.hours > 12 ? nextElements.hours - 12 : nextElements.hours;
      }

      _this2.setState({ elements: nextElements }, function () {
        if (onChange) {
          if (elements.duration) {
            onChange('P' + elements.hours + 'H' + elements.minutes + 'M' + elements.seconds + 'S');
          } else {
            onChange('T' + elements.hours + ':' + elements.minutes + ':' + elements.seconds);
          }
        }
      });
    }, interval);
  };

  Clock.prototype.render = function render() {
    var _props2 = this.props,
        type = _props2.type,
        rest = _objectWithoutProperties(_props2, ['type']);

    var elements = this.state.elements;

    var content = void 0;
    if (type === 'analog') {
      content = _react2.default.createElement(_Analog.Analog, _extends({ elements: elements }, rest));
    } else if (type === 'digital') {
      content = _react2.default.createElement(_Digital.Digital, _extends({ elements: elements }, rest));
    }

    return content;
  };

  return Clock;
}(_react.Component);

Clock.defaultProps = {
  hourLimit: 24,
  precision: 'seconds',
  run: 'forward',
  size: 'medium',
  type: 'analog'
};


var ClockDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  ClockDoc = require('./doc').doc(Clock); // eslint-disable-line global-require
}
var ClockWrapper = (0, _recompose.compose)(_hocs.withTheme)(ClockDoc || Clock);

exports.Clock = ClockWrapper;