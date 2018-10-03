var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { Box } from '../Box';
import { TableCell } from '../TableCell';
import { Text } from '../Text';

import { Resizer } from './Resizer';
import { Searcher } from './Searcher';
import { Sorter } from './Sorter';
import { ExpanderCell } from './ExpanderCell';
import { StyledDataTableHeader, StyledDataTableRow } from './StyledDataTable';

var Header = function Header(_ref) {
  var columns = _ref.columns,
      filtering = _ref.filtering,
      filters = _ref.filters,
      groups = _ref.groups,
      groupState = _ref.groupState,
      onFilter = _ref.onFilter,
      onFiltering = _ref.onFiltering,
      onResize = _ref.onResize,
      onSort = _ref.onSort,
      onToggle = _ref.onToggle,
      sort = _ref.sort,
      theme = _ref.theme,
      widths = _ref.widths,
      rest = _objectWithoutProperties(_ref, ['columns', 'filtering', 'filters', 'groups', 'groupState', 'onFilter', 'onFiltering', 'onResize', 'onSort', 'onToggle', 'sort', 'theme', 'widths']);

  // The tricky part here is that we need to manage the theme styling
  // to make sure that the background, border, and padding are applied
  // at the right places depending on the mix of controls in each header cell.
  var outerThemeProps = function (_ref2) {
    var border = _ref2.border,
        background = _ref2.background;
    return { border: border, background: background };
  }(theme.dataTable.header);

  var _theme$dataTable$head = theme.dataTable.header,
      border = _theme$dataTable$head.border,
      background = _theme$dataTable$head.background,
      innerThemeProps = _objectWithoutProperties(_theme$dataTable$head, ['border', 'background']);

  return React.createElement(
    StyledDataTableHeader,
    rest,
    React.createElement(
      StyledDataTableRow,
      null,
      groups && React.createElement(ExpanderCell, {
        context: 'header',
        expanded: Object.keys(groupState).filter(function (k) {
          return !groupState[k].expanded;
        }).length === 0,
        theme: theme,
        onToggle: onToggle
      }),
      columns.map(function (_ref3) {
        var property = _ref3.property,
            header = _ref3.header,
            align = _ref3.align,
            search = _ref3.search;

        var content = typeof header === 'string' ? React.createElement(
          Text,
          null,
          header
        ) : header;

        if (onSort) {
          content = React.createElement(
            Sorter,
            {
              align: align,
              fill: !search,
              property: property,
              onSort: onSort,
              sort: sort,
              theme: theme,
              themeProps: search ? innerThemeProps : theme.dataTable.header
            },
            content
          );
        }

        if (search && filters) {
          if (!onSort) {
            content = React.createElement(
              Box,
              _extends({ justify: 'center', align: align }, innerThemeProps),
              content
            );
          }
          content = React.createElement(
            Box,
            _extends({
              fill: true,
              direction: 'row',
              justify: 'between',
              align: 'center'
            }, outerThemeProps),
            content,
            React.createElement(Searcher, {
              filtering: filtering,
              filters: filters,
              property: property,
              onFilter: onFilter,
              onFiltering: onFiltering
            })
          );
        } else if (!onSort) {
          content = React.createElement(
            Box,
            _extends({
              fill: true,
              justify: 'center',
              align: align
            }, theme.dataTable.header),
            content
          );
        }

        if (onResize) {
          content = React.createElement(
            Resizer,
            { property: property, onResize: onResize, theme: theme },
            content
          );
        }

        return React.createElement(
          TableCell,
          {
            key: property,
            scope: 'col',
            plain: true,
            verticalAlign: 'bottom',
            style: widths && widths[property] ? { width: widths[property] } : undefined
          },
          content
        );
      })
    )
  );
};
export { Header };