'use strict';

exports.__esModule = true;
exports.TableCell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box');

var _hocs = require('../hocs');

var _TableContext = require('../Table/TableContext');

var _StyledTable = require('../Table/StyledTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      theme = _ref.theme,
      verticalAlign = _ref.verticalAlign,
      rest = _objectWithoutProperties(_ref, ['children', 'plain', 'scope', 'size', 'theme', 'verticalAlign']);

  var Cell = scope ? _StyledTable.StyledTableCell.withComponent('th') : _StyledTable.StyledTableCell;
  return _react2.default.createElement(
    _TableContext.TableContext.Consumer,
    null,
    function (tableContext) {
      return _react2.default.createElement(
        Cell,
        _extends({
          scope: scope,
          size: size,
          tableContext: tableContext,
          theme: theme,
          verticalAlign: verticalAlign
        }, plain ? rest : {}),
        plain ? children : _react2.default.createElement(
          _Box.Box,
          rest,
          children
        )
      );
    }
  );
};

TableCell.defaultProps = {
  align: 'start',
  pad: { horizontal: 'small', vertical: 'xsmall' }
};

var TableCellDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TableCellDoc = require('./doc').doc(TableCell); // eslint-disable-line global-require
}
var TableCellWrapper = (0, _recompose.compose)(_hocs.withTheme)(TableCellDoc || TableCell);

exports.TableCell = TableCellWrapper;