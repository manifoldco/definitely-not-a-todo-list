'use strict';

exports.__esModule = true;
exports.Body = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InfiniteScroll = require('../InfiniteScroll');

var _TableRow = require('../TableRow');

var _TableCell = require('../TableCell');

var _Cell = require('./Cell');

var _StyledDataTable = require('./StyledDataTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Body = function Body(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      onMore = _ref.onMore,
      primaryProperty = _ref.primaryProperty,
      size = _ref.size,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['columns', 'data', 'onMore', 'primaryProperty', 'size', 'theme']);

  return _react2.default.createElement(
    _StyledDataTable.StyledDataTableBody,
    _extends({ size: size, theme: theme }, rest),
    _react2.default.createElement(
      _InfiniteScroll.InfiniteScroll,
      {
        items: data,
        onMore: onMore,
        scrollableAncestor: 'window',
        renderMarker: function renderMarker(marker) {
          return _react2.default.createElement(
            _TableRow.TableRow,
            null,
            _react2.default.createElement(
              _TableCell.TableCell,
              null,
              marker
            )
          );
        }
      },
      function (datum) {
        return _react2.default.createElement(
          _StyledDataTable.StyledDataTableRow,
          { key: datum[primaryProperty], size: size },
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
      }
    )
  );
};
exports.Body = Body;