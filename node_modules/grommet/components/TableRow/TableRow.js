'use strict';

exports.__esModule = true;
exports.TableRow = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledTable = require('../Table/StyledTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(props) {
  return _react2.default.createElement(_StyledTable.StyledTableRow, props);
};

var TableRowDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TableRowDoc = require('./doc').doc(TableRow); // eslint-disable-line global-require
}
var TableRowWrapper = TableRowDoc || TableRow;

exports.TableRow = TableRowWrapper;