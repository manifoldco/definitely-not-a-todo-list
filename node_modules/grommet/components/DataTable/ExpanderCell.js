'use strict';

exports.__esModule = true;
exports.ExpanderCell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box');

var _Button = require('../Button');

var _TableCell = require('../TableCell');

var _hocs = require('../hocs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExpanderCell = function ExpanderCell(_ref) {
  var context = _ref.context,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['context', 'expanded', 'onToggle', 'theme']);

  var ExpandIcon = theme.dataTable.icons[expanded ? 'contract' : 'expand'];
  if (onToggle) {
    return _react2.default.createElement(
      _TableCell.TableCell,
      {
        size: 'xxsmall',
        plain: true,
        verticalAlign: 'top'
      },
      _react2.default.createElement(
        _Button.Button,
        {
          fill: true,
          a11yTitle: expanded ? 'collapse' : 'expand',
          hoverIndicator: true,
          onClick: onToggle
        },
        _react2.default.createElement(
          _Box.Box,
          _extends({}, theme.dataTable[context], rest, { pad: 'xsmall' }),
          _react2.default.createElement(ExpandIcon, { color: theme.dark ? 'border-dark' : 'border-light' })
        )
      )
    );
  }
  return _react2.default.createElement(_TableCell.TableCell, { size: 'xxsmall', verticalAlign: 'top' });
};

var ExpanderCellWrapper = (0, _recompose.compose)(_hocs.withTheme)(ExpanderCell);

exports.ExpanderCell = ExpanderCellWrapper;