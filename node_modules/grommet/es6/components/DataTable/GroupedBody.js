var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Fragment } from 'react';

import { TableCell } from '../TableCell';

import { Cell } from './Cell';
import { ExpanderCell } from './ExpanderCell';
import { StyledDataTableBody, StyledDataTableRow } from './StyledDataTable';

var GroupedBody = function GroupedBody(_ref) {
  var columns = _ref.columns,
      groupBy = _ref.groupBy,
      groups = _ref.groups,
      groupState = _ref.groupState,
      primaryProperty = _ref.primaryProperty,
      onToggle = _ref.onToggle,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['columns', 'groupBy', 'groups', 'groupState', 'primaryProperty', 'onToggle', 'size', 'theme']);

  return React.createElement(
    StyledDataTableBody,
    _extends({ size: size, theme: theme }, rest),
    groups.map(function (group) {
      var expanded = groupState[group.key].expanded;

      var content = React.createElement(
        StyledDataTableRow,
        { key: group.key, size: size },
        React.createElement(ExpanderCell, {
          context: expanded ? 'groupHeader' : 'body',
          expanded: expanded,
          theme: theme,
          onToggle: onToggle(group.key)
        }),
        columns.map(function (column) {
          return React.createElement(Cell, {
            key: column.property,
            context: expanded ? 'groupHeader' : 'body',
            column: column,
            datum: group.datum,
            scope: column.property === groupBy ? 'row' : undefined,
            theme: theme
          });
        })
      );

      if (expanded) {
        content = React.createElement(
          Fragment,
          { key: group.key },
          content,
          group.data.map(function (datum) {
            return React.createElement(
              StyledDataTableRow,
              { key: datum[primaryProperty], size: size },
              React.createElement(
                TableCell,
                {
                  verticalAlign: 'bottom'
                },
                groupState[group.key].expanded
              ),
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
          }),
          React.createElement(
            StyledDataTableRow,
            { size: size, 'aria-hidden': true },
            React.createElement(TableCell, null)
          )
        );
      }

      return content;
    })
  );
};
export { GroupedBody };