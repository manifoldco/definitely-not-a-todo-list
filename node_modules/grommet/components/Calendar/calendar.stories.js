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

var SimpleCalendar = function (_Component) {
  _inherits(SimpleCalendar, _Component);

  function SimpleCalendar() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onSelect = function (date) {
      return _this.setState({ date: date });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleCalendar.prototype.render = function render() {
    var date = this.state.date;

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Calendar, { date: date, onSelect: this.onSelect, size: 'small' })
    );
  };

  return SimpleCalendar;
}(_react.Component);

var RichCalendar = function (_Component2) {
  _inherits(RichCalendar, _Component2);

  function RichCalendar() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, RichCalendar);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {}, _this2.onSelect = function (selectedDate) {
      var _this2$state = _this2.state,
          date = _this2$state.date,
          dates = _this2$state.dates,
          previousSelectedDate = _this2$state.previousSelectedDate;

      if (!dates) {
        if (!date) {
          _this2.setState({ date: selectedDate });
        } else {
          var priorDate = new Date(date);
          var nextDate = new Date(selectedDate);
          if (priorDate.getTime() < nextDate.getTime()) {
            _this2.setState({ date: undefined, dates: [[date, selectedDate]] });
          } else if (priorDate.getTime() > nextDate.getTime()) {
            _this2.setState({ date: undefined, dates: [[selectedDate, date]] });
          }
        }
      } else {
        var priorDates = dates[0].map(function (d) {
          return new Date(d);
        });
        var previousDate = new Date(previousSelectedDate);
        var _nextDate = new Date(selectedDate);
        if (_nextDate.getTime() < previousDate.getTime()) {
          if (_nextDate.getTime() < priorDates[0].getTime()) {
            _this2.setState({ dates: [[selectedDate, dates[0][1]]] });
          } else if (_nextDate.getTime() > priorDates[0].getTime()) {
            _this2.setState({ dates: [[dates[0][0], selectedDate]] });
          }
        } else if (_nextDate.getTime() > previousDate.getTime()) {
          if (_nextDate.getTime() > priorDates[1].getTime()) {
            _this2.setState({ dates: [[dates[0][0], selectedDate]] });
          } else if (_nextDate.getTime() < priorDates[1].getTime()) {
            _this2.setState({ dates: [[selectedDate, dates[0][1]]] });
          }
        }
      }
      _this2.setState({ previousSelectedDate: selectedDate });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  RichCalendar.prototype.render = function render() {
    var _state = this.state,
        date = _state.date,
        dates = _state.dates;

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Calendar, { date: date, dates: dates, onSelect: this.onSelect })
    );
  };

  return RichCalendar;
}(_react.Component);

(0, _react3.storiesOf)('Calendar', module).add('Simple Calendar', function () {
  return _react2.default.createElement(SimpleCalendar, null);
}).add('Range Calendar', function () {
  return _react2.default.createElement(RichCalendar, null);
});