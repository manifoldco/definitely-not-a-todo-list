'use strict';

exports.__esModule = true;
exports.StyledChart = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledChart = exports.StyledChart = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledChart',
  componentId: 'sc-1nae0gf-0'
})(['display:block;max-width:100%;overflow:visible;', ''], function (props) {
  return props.theme.chart && props.theme.chart.extend;
});