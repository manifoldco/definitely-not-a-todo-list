'use strict';

exports.__esModule = true;
exports.Cell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

var _TableCell = require('../TableCell');

var _Text = require('../Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Cell = function Cell(_ref) {
  var _ref$column = _ref.column,
      align = _ref$column.align,
      property = _ref$column.property,
      primary = _ref$column.primary,
      render = _ref$column.render,
      context = _ref.context,
      datum = _ref.datum,
      scope = _ref.scope,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['column', 'context', 'datum', 'scope', 'theme']);

  var content = void 0;
  if (render) {
    if (datum[property]) {
      content = render(datum);
    }
  } else if (datum[property]) {
    content = datum[property];
  }

  if (typeof content === 'string' || typeof content === 'number') {
    if (primary) {
      content = _react2.default.createElement(
        'strong',
        null,
        content
      );
    }
    content = _react2.default.createElement(
      _Text.Text,
      null,
      content
    );
  }

  if (theme.dataTable[context]) {
    content = _react2.default.createElement(
      _Box.Box,
      _extends({
        direction: 'row',
        justify: align,
        fill: 'vertical'
      }, theme.dataTable[context], rest),
      content
    );
  }

  return _react2.default.createElement(
    _TableCell.TableCell,
    {
      scope: scope,
      plain: !!theme.dataTable[context],
      verticalAlign: context === 'header' ? 'bottom' : 'top'
    },
    content
  );
};
exports.Cell = Cell;