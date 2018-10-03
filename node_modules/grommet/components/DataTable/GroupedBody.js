'use strict';

exports.__esModule = true;
exports.GroupedBody = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableCell = require('../TableCell');

var _Cell = require('./Cell');

var _ExpanderCell = require('./ExpanderCell');

var _StyledDataTable = require('./StyledDataTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  return _react2.default.createElement(
    _StyledDataTable.StyledDataTableBody,
    _extends({ size: size, theme: theme }, rest),
    groups.map(function (group) {
      var expanded = groupState[group.key].expanded;

      var content = _react2.default.createElement(
        _StyledDataTable.StyledDataTableRow,
        { key: group.key, size: size },
        _react2.default.createElement(_ExpanderCell.ExpanderCell, {
          context: expanded ? 'groupHeader' : 'body',
          expanded: expanded,
          theme: theme,
          onToggle: onToggle(group.key)
        }),
        columns.map(function (column) {
          return _react2.default.createElement(_Cell.Cell, {
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
        content = _react2.default.createElement(
          _react.Fragment,
          { key: group.key },
          content,
          group.data.map(function (datum) {
            return _react2.default.createElement(
              _StyledDataTable.StyledDataTableRow,
              { key: datum[primaryProperty], size: size },
              _react2.default.createElement(
                _TableCell.TableCell,
                {
                  verticalAlign: 'bottom'
                },
                groupState[group.key].expanded
              ),
              columns.map(function (column) {
                return _react2.default.createElement(_Cell.Cell, {
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
          _react2.default.createElement(
            _StyledDataTable.StyledDataTableRow,
            { size: size, 'aria-hidden': true },
            _react2.default.createElement(_TableCell.TableCell, null)
          )
        );
      }

      return content;
    })
  );
};
exports.GroupedBody = GroupedBody;