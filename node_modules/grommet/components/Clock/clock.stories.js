'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitalClock = function (_Component) {
  _inherits(DigitalClock, _Component);

  function DigitalClock() {
    _classCallCheck(this, DigitalClock);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DigitalClock.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Clock, { type: 'digital' })
    );
  };

  return DigitalClock;
}(_react.Component);

var AnalogClock = function (_Component2) {
  _inherits(AnalogClock, _Component2);

  function AnalogClock() {
    _classCallCheck(this, AnalogClock);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  AnalogClock.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Clock, { type: 'analog' })
    );
  };

  return AnalogClock;
}(_react.Component);

(0, _react3.storiesOf)('Clock', module).add('Digital Clock', function () {
  return _react2.default.createElement(DigitalClock, null);
}).add('Analog Clock', function () {
  return _react2.default.createElement(AnalogClock, null);
});