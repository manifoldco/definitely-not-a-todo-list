'use strict';

exports.__esModule = true;
exports.StyledMeter = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roundStyle = (0, _styledComponents.css)(['border-radius:', ';'], function (props) {
  return props.theme.global.edgeSize[props.round.size];
});

// overflow: hidden is needed for ie11
var StyledMeter = exports.StyledMeter = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledMeter',
  componentId: 'nsxarx-0'
})(['max-width:100%;', ' overflow:hidden;path{transition:all 0.3s;}', ''], function (props) {
  return props.round && roundStyle;
}, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});