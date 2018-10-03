'use strict';

exports.__esModule = true;
exports.StyledGrommet = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullStyle = (0, _styledComponents.css)(['width:100vw;height:100vh;overflow:auto;']);

var StyledGrommet = exports.StyledGrommet = _styledComponents2.default.div.withConfig({
  displayName: 'StyledGrommet',
  componentId: 'sc-19lkkz7-0'
})(['', ' ', ' ', ' ', ''], _utils.baseStyle, function (props) {
  return props.full && fullStyle;
}, function (props) {
  return props.theme.global.font.face;
}, function (props) {
  return props.theme.grommet.extend;
});