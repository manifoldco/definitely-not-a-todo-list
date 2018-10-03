'use strict';

exports.__esModule = true;
exports.StyledDiagram = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDiagram = exports.StyledDiagram = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledDiagram',
  componentId: 'sc-1vzeu9f-0'
})(['max-width:100%;width:100%;height:100%;', ''], function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});