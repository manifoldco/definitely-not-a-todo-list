var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { InfiniteScroll } from '../InfiniteScroll';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

import { Cell } from './Cell';
import { StyledDataTableBody, StyledDataTableRow } from './StyledDataTable';

var Body = function Body(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      onMore = _ref.onMore,
      primaryProperty = _ref.primaryProperty,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['columns', 'data', 'onMore', 'primaryProperty', 'size', 'theme']);

  return React.createElement(
    StyledDataTableBody,
    _extends({ size: size, theme: theme }, rest),
    React.createElement(
      InfiniteScroll,
      {
        items: data,
        onMore: onMore,
        scrollableAncestor: 'window',
        renderMarker: function renderMarker(marker) {
          return React.createElement(
            TableRow,
            null,
            React.createElement(
              TableCell,
              null,
              marker
            )
          );
        }
      },
      function (datum) {
        return React.createElement(
          StyledDataTableRow,
          { key: datum[primaryProperty], size: size },
          columns.map(function (column) {
            return React.createElement(Cell, {
              key: column.property,
              context: 'body',
              column: column,
              datum: datum,
              scope: column.primary ? 'row' : undefined,
              theme: theme
            });
          })
        );
      }
    )
  );
};
export { Body };