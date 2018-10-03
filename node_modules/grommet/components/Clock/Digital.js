'use strict';

exports.__esModule = true;
exports.Digital = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

var _StyledClock = require('./StyledClock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Digit = function (_Component) {
  _inherits(Digit, _Component);

  function Digit() {
    var _temp, _this, _ret;

    _classCallCheck(this, Digit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Digit.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var number = nextProps.number;

    if (number !== prevState.number) {
      return { previous: prevState.number, number: number };
    }
    return null;
  };

  Digit.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    if (prevState.previous === undefined && this.state.previous !== undefined) {
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.setState({ previous: undefined });
      }, 900);
    }
  };

  Digit.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  Digit.prototype.render = function render() {
    var _props = this.props,
        run = _props.run,
        size = _props.size,
        theme = _props.theme;
    var _state = this.state,
        number = _state.number,
        previous = _state.previous;

    if (previous !== undefined) {
      var direction = run === 'backward' ? 'down' : 'up';
      return _react2.default.createElement(
        _StyledClock.StyledDigitalDigit,
        { size: size, theme: theme },
        _react2.default.createElement(
          _StyledClock.StyledDigitalPrevious,
          { direction: direction },
          Math.floor(previous)
        ),
        _react2.default.createElement(
          _StyledClock.StyledDigitalNext,
          { direction: direction },
          Math.floor(number)
        )
      );
    }
    return _react2.default.createElement(
      _StyledClock.StyledDigitalDigit,
      { size: size, theme: theme },
      Math.floor(number)
    );
  };

  return Digit;
}(_react.Component);

var Element = function Element(_ref) {
  var number = _ref.number,
      run = _ref.run,
      sep = _ref.sep,
      size = _ref.size,
      theme = _ref.theme;

  var tens = Math.floor(number / 10);
  var ones = number % 10;
  var result = [_react2.default.createElement(Digit, { key: 'tens', run: run, size: size, number: tens, theme: theme }), _react2.default.createElement(Digit, { key: 'ones', run: run, size: size, number: ones, theme: theme })];
  if (sep) {
    result.unshift(_react2.default.createElement(
      _StyledClock.StyledDigitalDigit,
      { key: 'sep', size: size, theme: theme },
      ':'
    ));
  }
  return result;
};

var Digital = exports.Digital = function (_Component2) {
  _inherits(Digital, _Component2);

  function Digital() {
    _classCallCheck(this, Digital);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Digital.prototype.render = function render() {
    var _props2 = this.props,
        elements = _props2.elements,
        precision = _props2.precision,
        run = _props2.run,
        size = _props2.size,
        theme = _props2.theme,
        rest = _objectWithoutProperties(_props2, ['elements', 'precision', 'run', 'size', 'theme']);

    var seconds = void 0;
    if (precision === 'seconds') {
      seconds = _react2.default.createElement(Element, { number: elements.seconds, run: run, size: size, sep: true, theme: theme });
    }
    var minutes = void 0;
    if (precision === 'minutes' || precision === 'seconds') {
      minutes = _react2.default.createElement(Element, { number: elements.minutes, run: run, size: size, sep: true, theme: theme });
    }
    return _react2.default.createElement(
      _Box.Box,
      _extends({ direction: 'row' }, rest),
      _react2.default.createElement(Element, { number: elements.hours12 || elements.hours, run: run, size: size, theme: theme }),
      minutes,
      seconds
    );
  };

  return Digital;
}(_react.Component);