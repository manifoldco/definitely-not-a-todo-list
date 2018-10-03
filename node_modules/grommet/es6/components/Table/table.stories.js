function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow } from '../';
import { Text } from '../Text';
import { Grommet } from '../Grommet';
import { grommet } from '../../themes';

// Always should store amount in cents to avoid precision errors
var DATA = [{
  id: 1, name: 'Eric', email: 'eric@local', amount: 3775
}, {
  id: 2, name: 'Chris', email: 'chris@local', amount: 5825
}, {
  id: 3, name: 'Alan', email: 'alan@local', amount: 4300
}];

var TOTAL = 0;
DATA.forEach(function (datum) {
  TOTAL += datum.amount;
});

var amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

var COLUMNS = [{
  property: 'name',
  label: 'Name',
  dataScope: 'row',
  format: function format(datum) {
    return React.createElement(
      'strong',
      null,
      datum.name
    );
  }
}, {
  property: 'email',
  label: 'Email'
}, {
  property: 'amount',
  label: 'Amount',
  align: 'end',
  footer: amountFormatter.format(TOTAL / 100),
  format: function format(datum) {
    return amountFormatter.format(datum.amount / 100);
  }
}];

var SimpleTable = function (_Component) {
  _inherits(SimpleTable, _Component);

  function SimpleTable() {
    _classCallCheck(this, SimpleTable);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleTable.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Table,
        { caption: 'Simple Table' },
        React.createElement(
          TableHeader,
          null,
          React.createElement(
            TableRow,
            null,
            COLUMNS.map(function (c) {
              return React.createElement(
                TableCell,
                { key: c.property, scope: 'col', border: 'bottom', align: c.align },
                React.createElement(
                  Text,
                  null,
                  c.label
                )
              );
            })
          )
        ),
        React.createElement(
          TableBody,
          null,
          DATA.map(function (datum) {
            return React.createElement(
              TableRow,
              { key: datum.id },
              COLUMNS.map(function (c) {
                return React.createElement(
                  TableCell,
                  { key: c.property, scope: c.dataScope, align: c.align },
                  React.createElement(
                    Text,
                    null,
                    c.format ? c.format(datum) : datum[c.property]
                  )
                );
              })
            );
          })
        ),
        React.createElement(
          TableFooter,
          null,
          React.createElement(
            TableRow,
            null,
            COLUMNS.map(function (c) {
              return React.createElement(
                TableCell,
                { key: c.property, border: 'top', align: c.align },
                React.createElement(
                  Text,
                  null,
                  c.footer
                )
              );
            })
          )
        )
      )
    );
  };

  return SimpleTable;
}(Component);

storiesOf('Table', module).add('Simple Table', function () {
  return React.createElement(SimpleTable, null);
});