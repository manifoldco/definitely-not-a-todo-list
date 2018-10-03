'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../');

var _calcs2 = require('../Chart/calcs');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart() {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BarChart.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Chart, {
        type: 'bar',
        values: [[10, 20], [20, 30], [30, 15]]
      })
    );
  };

  return BarChart;
}(_react.Component);

var LineChart = function (_Component2) {
  _inherits(LineChart, _Component2);

  function LineChart() {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  LineChart.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Chart, {
        type: 'line',
        values: [20, 30, 15]
      })
    );
  };

  return LineChart;
}(_react.Component);

var AreaChart = function (_Component3) {
  _inherits(AreaChart, _Component3);

  function AreaChart() {
    _classCallCheck(this, AreaChart);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  AreaChart.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Chart, {
        type: 'area',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return AreaChart;
}(_react.Component);

var RichChart = function (_Component4) {
  _inherits(RichChart, _Component4);

  function RichChart() {
    var _temp, _this4, _ret;

    _classCallCheck(this, RichChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, _Component4.call.apply(_Component4, [this].concat(args))), _this4), _this4.state = { values: [], yAxis: [], xAxis: [] }, _temp), _possibleConstructorReturn(_this4, _ret);
  }

  RichChart.prototype.componentDidMount = function componentDidMount() {
    // generate data as a server might
    var date = new Date(2018, 5, 9);
    var value = 12345.678;
    var averages = [];
    while (averages.length < 21) {
      averages.unshift({ date: date.toISOString(), value: value });
      date.setTime(date.getTime() - 1000 * 3600 * 24);
      var factor = date.getDate() % 3;
      value = factor === 0 ? value + 12.34 : value - 123.45 * factor;
    }

    // convert for displaying
    var values = [];
    averages.forEach(function (avg) {
      values.push({ value: [new Date(avg.date).getTime(), avg.value] });
    });

    var _calcs = (0, _calcs2.calcs)(values, { coarseness: 5, steps: [3, 3] }),
        axis = _calcs.axis,
        bounds = _calcs.bounds;

    var xAxis = axis[0].map(function (x) {
      return new Date(x).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    var yAxis = axis[1];
    this.setState({ bounds: bounds, values: values, yAxis: yAxis, xAxis: xAxis }); // eslint-disable-line
  };

  RichChart.prototype.render = function render() {
    var _state = this.state,
        bounds = _state.bounds,
        values = _state.values,
        yAxis = _state.yAxis,
        xAxis = _state.xAxis;

    var chartProps = {
      size: { width: 'medium', height: 'small' },
      bounds: bounds,
      values: values,
      overflow: true
    };
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        { align: 'center' },
        _react2.default.createElement(
          _.Box,
          { direction: 'row', justify: 'between', width: 'medium', margin: { vertical: 'small' } },
          xAxis.map(function (x) {
            return _react2.default.createElement(
              _.Text,
              { key: x },
              x
            );
          })
        ),
        _react2.default.createElement(
          _.Stack,
          { guidingChild: 'last' },
          _react2.default.createElement(
            _.Box,
            { fill: true, justify: 'between' },
            yAxis.map(function (y, index) {
              var first = index === 0;
              var last = index === yAxis.length - 1 && !first;
              var align = void 0;
              if (first) {
                align = 'start';
              } else if (last) {
                align = 'end';
              } else {
                align = 'center';
              }
              return _react2.default.createElement(
                _.Box,
                { key: y, direction: 'row', align: align },
                _react2.default.createElement(
                  _.Box,
                  { pad: { horizontal: 'small' } },
                  _react2.default.createElement(
                    _.Text,
                    null,
                    y
                  )
                ),
                _react2.default.createElement(_.Box, { border: 'top', flex: true })
              );
            })
          ),
          _react2.default.createElement(_.Chart, _extends({}, chartProps, {
            type: 'area',
            color: { color: 'accent-1', opacity: 'medium' },
            thickness: 'hair'
          })),
          _react2.default.createElement(_.Chart, _extends({}, chartProps, {
            type: 'line',
            round: true,
            color: { color: 'accent-3', opacity: 'strong' },
            thickness: 'small'
          }))
        )
      )
    );
  };

  return RichChart;
}(_react.Component);

(0, _react3.storiesOf)('Chart', module).add('Bar Chart', function () {
  return _react2.default.createElement(BarChart, null);
}).add('Line Chart', function () {
  return _react2.default.createElement(LineChart, null);
}).add('Area Chart', function () {
  return _react2.default.createElement(AreaChart, null);
}).add('Rich Chart', function () {
  return _react2.default.createElement(RichChart, null);
});