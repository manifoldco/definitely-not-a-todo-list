'use strict';

exports.__esModule = true;
exports.Header = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

var _TableCell = require('../TableCell');

var _Text = require('../Text');

var _Resizer = require('./Resizer');

var _Searcher = require('./Searcher');

var _Sorter = require('./Sorter');

var _ExpanderCell = require('./ExpanderCell');

var _StyledDataTable = require('./StyledDataTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  return _react2.default.createElement(
    _StyledDataTable.StyledDataTableHeader,
    rest,
    _react2.default.createElement(
      _StyledDataTable.StyledDataTableRow,
      null,
      groups && _react2.default.createElement(_ExpanderCell.ExpanderCell, {
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

        var content = typeof header === 'string' ? _react2.default.createElement(
          _Text.Text,
          null,
          header
        ) : header;

        if (onSort) {
          content = _react2.default.createElement(
            _Sorter.Sorter,
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
            content = _react2.default.createElement(
              _Box.Box,
              _extends({ justify: 'center', align: align }, innerThemeProps),
              content
            );
          }
          content = _react2.default.createElement(
            _Box.Box,
            _extends({
              fill: true,
              direction: 'row',
              justify: 'between',
              align: 'center'
            }, outerThemeProps),
            content,
            _react2.default.createElement(_Searcher.Searcher, {
              filtering: filtering,
              filters: filters,
              property: property,
              onFilter: onFilter,
              onFiltering: onFiltering
            })
          );
        } else if (!onSort) {
          content = _react2.default.createElement(
            _Box.Box,
            _extends({
              fill: true,
              justify: 'center',
              align: align
            }, theme.dataTable.header),
            content
          );
        }

        if (onResize) {
          content = _react2.default.createElement(
            _Resizer.Resizer,
            { property: property, onResize: onResize, theme: theme },
            content
          );
        }

        return _react2.default.createElement(
          _TableCell.TableCell,
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
exports.Header = Header;