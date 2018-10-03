var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, DataTable, Meter, Text } from '../';
import { grommet } from '../../themes';

var amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

var columns = [{
  property: 'name',
  header: React.createElement(
    Text,
    null,
    'Name with extra'
  ),
  primary: true,
  footer: 'Total'
}, {
  property: 'location',
  header: 'Location'
}, {
  property: 'date',
  header: 'Date',
  render: function render(datum) {
    return new Date(datum.date).toLocaleDateString('en-US');
  },
  align: 'end'
}, {
  property: 'percent',
  header: 'Percent Complete',
  render: function render(datum) {
    return React.createElement(
      Box,
      { pad: { vertical: 'xsmall' } },
      React.createElement(Meter, { values: [{ value: datum.percent }], thickness: 'small', size: 'small' })
    );
  }
}, {
  property: 'paid',
  header: 'Paid',
  render: function render(datum) {
    return amountFormatter.format(datum.paid / 100);
  },
  align: 'end',
  aggregate: 'sum',
  footer: { aggregate: true }
}];

var locations = ['Boise', 'Fort Collins', 'Los Gatos', 'Palo Alto', 'San Francisco'];
var data = [];
for (var i = 0; i < 40; i += 1) {
  data.push({
    name: 'Name ' + (i + 1),
    location: locations[i % locations.length],
    date: '2018-07-' + (i % 30 + 1),
    percent: i % 11 * 10,
    paid: (i + 1) * 17 % 1000
  });
}
var DATA = [{ name: 'Alan', location: 'Los Gatos', date: '2018-06-11', percent: 20, paid: 2345 }, { name: 'Bryan', location: 'Fort Collins', date: '2018-06-10', percent: 30, paid: 1234 }, { name: 'Chris', location: 'Palo Alto', date: '2018-06-09', percent: 40, paid: 2345 }, { name: 'Eric', location: 'Palo Alto', date: '2018-06-11', percent: 80, paid: 3456 }, { name: 'Doug', location: 'Fort Collins', date: '2018-06-10', percent: 60, paid: 1234 }, { name: 'Jet', location: 'Palo Alto', date: '2018-06-09', percent: 40, paid: 3456 }, { name: 'Michael', location: 'Boise', date: '2018-06-11', percent: 50, paid: 1234 }, { name: 'Tracy', location: 'San Francisco', date: '2018-06-10', percent: 10, paid: 2345 }];

var SimpleDataTable = function (_Component) {
  _inherits(SimpleDataTable, _Component);

  function SimpleDataTable() {
    _classCallCheck(this, SimpleDataTable);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleDataTable.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(DataTable, { columns: columns, data: DATA })
    );
  };

  return SimpleDataTable;
}(Component);

var SizedDataTable = function (_Component2) {
  _inherits(SizedDataTable, _Component2);

  function SizedDataTable() {
    _classCallCheck(this, SizedDataTable);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  SizedDataTable.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(DataTable, { columns: columns, data: data, size: 'medium' })
    );
  };

  return SizedDataTable;
}(Component);

var TunableDataTable = function (_Component3) {
  _inherits(TunableDataTable, _Component3);

  function TunableDataTable() {
    _classCallCheck(this, TunableDataTable);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  TunableDataTable.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(DataTable, {
        columns: columns.map(function (c) {
          return _extends({}, c, { search: c.property === 'name' || c.property === 'location' });
        }),
        data: DATA,
        sortable: true,
        resizeable: true
      })
    );
  };

  return TunableDataTable;
}(Component);

var groupColumns = [].concat(columns);
var first = groupColumns[0];
groupColumns[0] = _extends({}, groupColumns[1]);
groupColumns[1] = _extends({}, first);
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;

var GroupedDataTable = function (_Component4) {
  _inherits(GroupedDataTable, _Component4);

  function GroupedDataTable() {
    _classCallCheck(this, GroupedDataTable);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  GroupedDataTable.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(DataTable, {
        columns: groupColumns,
        data: DATA,
        groupBy: 'location',
        sortable: true
      })
    );
  };

  return GroupedDataTable;
}(Component);

var ServedDataTable = function (_Component5) {
  _inherits(ServedDataTable, _Component5);

  function ServedDataTable() {
    var _temp, _this5, _ret;

    _classCallCheck(this, ServedDataTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this5 = _possibleConstructorReturn(this, _Component5.call.apply(_Component5, [this].concat(args))), _this5), _this5.state = { data: DATA }, _this5.onSearch = function (search) {
      var nextData = void 0;
      if (search) {
        var expressions = Object.keys(search).map(function (property) {
          return {
            property: property,
            exp: new RegExp(search[property], 'i')
          };
        });
        nextData = DATA.filter(function (d) {
          return !expressions.some(function (e) {
            return !e.exp.test(d[e.property]);
          });
        });
      } else {
        nextData = DATA;
      }
      _this5.setState({ data: nextData });
    }, _temp), _possibleConstructorReturn(_this5, _ret);
  }

  ServedDataTable.prototype.render = function render() {
    var servedData = this.state.data;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(DataTable, {
        columns: columns.map(function (column) {
          return _extends({}, column, {
            search: column.property === 'name' || column.property === 'location'
          });
        }),
        data: servedData,
        onSearch: this.onSearch
      })
    );
  };

  return ServedDataTable;
}(Component);

storiesOf('DataTable', module).add('Simple DataTable', function () {
  return React.createElement(SimpleDataTable, null);
}).add('Sized DataTable', function () {
  return React.createElement(SizedDataTable, null);
}).add('Tunable DataTable', function () {
  return React.createElement(TunableDataTable, null);
}).add('Grouped DataTable', function () {
  return React.createElement(GroupedDataTable, null);
}).add('Served DataTable', function () {
  return React.createElement(ServedDataTable, null);
});