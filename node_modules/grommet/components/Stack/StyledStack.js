'use strict';

exports.__esModule = true;
exports.StyledStackLayer = exports.StyledStack = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n';

var StyledStack = exports.StyledStack = _styledComponents2.default.div.withConfig({
  displayName: 'StyledStack',
  componentId: 'ajspsk-0'
})(['position:relative;', ' ', ''], function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});

var styleMap = {
  'fill': '\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ',
  'center': '\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ',
  'left': '\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ',
  'right': '\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ',
  'top': '\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ',
  'bottom': '\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ',
  'top-left': '\n    top: 0;\n    left: 0;\n  ',
  'bottom-left': '\n    bottom: 0;\n    left: 0;\n  ',
  'top-right': '\n    top: 0;\n    right: 0;\n  ',
  'bottom-right': '\n    bottom: 0;\n    right: 0;\n  '
};

var StyledStackLayer = exports.StyledStackLayer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledStack__StyledStackLayer',
  componentId: 'ajspsk-1'
})(['position:', ';', ' ', ' ', ''], function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ';';
}, function (props) {
  return props.fillContainer && '\n    width: 100%;\n    height: 100%;\n  ';
});