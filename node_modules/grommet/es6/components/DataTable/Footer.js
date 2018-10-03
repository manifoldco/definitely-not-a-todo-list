function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { withTheme } from '../hocs';

import { Cell } from './Cell';
import { StyledDataTableFooter } from './StyledDataTable';

var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      footerValues = _ref.footerValues,
      groups = _ref.groups,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['columns', 'footerValues', 'groups', 'theme']);

  return React.createElement(
    StyledDataTableFooter,
    rest,
    React.createElement(
      TableRow,
      null,
      groups && React.createElement(
        TableCell,
        { size: 'xxsmall', plain: true, verticalAlign: 'top' },
        React.createElement(Box, theme.dataTable.footer)
      ),
      columns.map(function (column) {
        return React.createElement(Cell, {
          key: column.property,
          context: 'footer',
          column: column,
          datum: footerValues,
          theme: theme
        });
      })
    )
  );
};

var FooterWrapper = compose(withTheme)(Footer);

export { FooterWrapper as Footer };