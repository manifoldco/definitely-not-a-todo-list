'use strict';

exports.__esModule = true;
exports.StyledCheckBox = exports.StyledCheckBoxKnob = exports.StyledCheckBoxToggle = exports.StyledCheckBoxBox = exports.StyledCheckBoxInput = exports.StyledCheckBoxContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disabledStyle = '\n  opacity: 0.5;\n  cursor: default;\n';

var hoverStyle = (0, _styledComponents.css)([':hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:', ';}'], function (props) {
  return props.theme.dark ? props.theme.checkBox.hover.border.color.dark : props.theme.checkBox.hover.border.color.light;
});

var StyledCheckBoxContainer = exports.StyledCheckBoxContainer = _styledComponents2.default.label.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxContainer',
  componentId: 'sc-1dbk5ju-0'
})(['display:flex;flex-direction:', ';align-items:center;cursor:pointer;user-select:none;', ' > div:first-child{', '}', ''], function (props) {
  return props.reverse ? 'row-reverse' : 'row';
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.reverse ? 'margin-left: ' + props.theme.global.edgeSize.small + ';' : 'margin-right: ' + props.theme.global.edgeSize.small + ';';
}, function (props) {
  return props.theme.checkBox.hover.border.color && hoverStyle;
});

var StyledCheckBoxInput = exports.StyledCheckBoxInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxInput',
  componentId: 'sc-1dbk5ju-1'
})(['position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;z-index:1;cursor:pointer;:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background:', ';}'], function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
});

var StyledCheckBoxBox = exports.StyledCheckBoxBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxBox',
  componentId: 'sc-1dbk5ju-2'
})(['box-sizing:border-box;position:relative;top:-1px;display:inline-block;width:', ';height:', ';vertical-align:middle;background:inherit;border:', ' solid;border-color:', ';border-radius:', ';> svg{box-sizing:border-box;position:absolute;top:-2px;left:-2px;display:none;width:', ';height:', ';stroke-width:', ';stroke:', ';}', ';'], function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.border.radius;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.check.width;
}, function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.focus && _utils.focusStyle;
});

var StyledCheckBoxToggle = exports.StyledCheckBoxToggle = _styledComponents2.default.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxToggle',
  componentId: 'sc-1dbk5ju-3'
})(['box-sizing:border-box;position:relative;vertical-align:middle;display:inline-block;width:', ';height:', ';border:', ' solid;border-color:', ';border-radius:', ';', ';'], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.focus && _utils.focusStyle;
});

var StyledCheckBoxKnob = exports.StyledCheckBoxKnob = _styledComponents2.default.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxKnob',
  componentId: 'sc-1dbk5ju-4'
})(['box-sizing:border-box;position:absolute;top:-', ';left:-', ';transition:all 0.3s;width:', ';height:', ';background:', ';border-radius:', ';'], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.toggle.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.toggle.radius;
});

var StyledCheckBox = exports.StyledCheckBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCheckBox',
  componentId: 'sc-1dbk5ju-5'
})(['position:relative;', ''], function (props) {
  return props.theme.checkBox && props.theme.checkBox.extend;
});