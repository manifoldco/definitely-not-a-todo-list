'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../');

var _Text = require('../Text');

var _Grommet = require('../Grommet');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _react2.default.createElement(
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
    return _react2.default.createElement(
      _Grommet.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Table,
        { caption: 'Simple Table' },
        _react2.default.createElement(
          _.TableHeader,
          null,
          _react2.default.createElement(
            _.TableRow,
            null,
            COLUMNS.map(function (c) {
              return _react2.default.createElement(
                _.TableCell,
                { key: c.property, scope: 'col', border: 'bottom', align: c.align },
                _react2.default.createElement(
                  _Text.Text,
                  null,
                  c.label
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _.TableBody,
          null,
          DATA.map(function (datum) {
            return _react2.default.createElement(
              _.TableRow,
              { key: datum.id },
              COLUMNS.map(function (c) {
                return _react2.default.createElement(
                  _.TableCell,
                  { key: c.property, scope: c.dataScope, align: c.align },
                  _react2.default.createElement(
                    _Text.Text,
                    null,
                    c.format ? c.format(datum) : datum[c.property]
                  )
                );
              })
            );
          })
        ),
        _react2.default.createElement(
          _.TableFooter,
          null,
          _react2.default.createElement(
            _.TableRow,
            null,
            COLUMNS.map(function (c) {
              return _react2.default.createElement(
                _.TableCell,
                { key: c.property, border: 'top', align: c.align },
                _react2.default.createElement(
                  _Text.Text,
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
}(_react.Component);

(0, _react3.storiesOf)('Table', module).add('Simple Table', function () {
  return _react2.default.createElement(SimpleTable, null);
});