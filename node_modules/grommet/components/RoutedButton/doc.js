'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(RoutedButton) {
  var DocumentedRoutedButton = (0, _reactDesc.describe)(RoutedButton).availableAt((0, _utils.getAvailableAtBadge)('RoutedButton')).description('A button with support for React Router.').usage('import { RoutedButton } from \'grommet\';\n<RoutedButton primary={true} path=\'/documentation\' />');
  DocumentedRoutedButton.propTypes = _extends({}, _utils.ROUTER_PROPS);
  return DocumentedRoutedButton;
};