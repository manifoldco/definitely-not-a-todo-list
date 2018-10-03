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

var BarMeter = function (_Component) {
  _inherits(BarMeter, _Component);

  function BarMeter() {
    _classCallCheck(this, BarMeter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BarMeter.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Meter, {
        type: 'bar',
        background: 'light-2',
        values: [{ value: 30 }]
      })
    );
  };

  return BarMeter;
}(_react.Component);

var CircleMeter = function (_Component2) {
  _inherits(CircleMeter, _Component2);

  function CircleMeter() {
    _classCallCheck(this, CircleMeter);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CircleMeter.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Meter, {
        type: 'circle',
        background: 'light-2',
        values: [{ value: 30 }]
      })
    );
  };

  return CircleMeter;
}(_react.Component);

(0, _react3.storiesOf)('Meter', module).add('Bar Meter', function () {
  return _react2.default.createElement(BarMeter, null);
}).add('Circle Meter', function () {
  return _react2.default.createElement(CircleMeter, null);
});