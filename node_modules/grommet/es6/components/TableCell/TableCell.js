var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { withTheme } from '../hocs';

import { TableContext } from '../Table/TableContext';
import { StyledTableCell } from '../Table/StyledTable';

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      theme = _ref.theme,
      verticalAlign = _ref.verticalAlign,
      rest = _objectWithoutProperties(_ref, ['children', 'plain', 'scope', 'size', 'theme', 'verticalAlign']);

  var Cell = scope ? StyledTableCell.withComponent('th') : StyledTableCell;
  return React.createElement(
    TableContext.Consumer,
    null,
    function (tableContext) {
      return React.createElement(
        Cell,
        _extends({
          scope: scope,
          size: size,
          tableContext: tableContext,
          theme: theme,
          verticalAlign: verticalAlign
        }, plain ? rest : {}),
        plain ? children : React.createElement(
          Box,
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
var TableCellWrapper = compose(withTheme)(TableCellDoc || TableCell);

export { TableCellWrapper as TableCell };