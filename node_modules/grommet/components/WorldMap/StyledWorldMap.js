'use strict';

exports.__esModule = true;
exports.StyledWorldMap = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledWorldMap = exports.StyledWorldMap = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledWorldMap',
  componentId: 'had4c3-0'
})(['width:100%;', ''], function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});