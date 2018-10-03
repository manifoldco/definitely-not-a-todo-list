'use strict';

exports.__esModule = true;
exports.StyledRangeInput = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rangeTrackStyle = (0, _styledComponents.css)(['box-sizing:border-box;width:100%;height:', ';background:', ';'], function (props) {
  return props.theme.rangeInput.track.height;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme);
});

var rangeThumbStyle = (0, _styledComponents.css)(['box-sizing:border-box;position:relative;border-radius:', ';height:', ';width:', ';overflow:visible;background:', ';-webkit-appearance:none;cursor:pointer;'], function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || props.theme.global.control.color, props.theme);
});

var firefoxMicrosoftThumbStyle = (0, _styledComponents.css)(['', ' margin-top:0px;height:', ';width:', ';'], rangeThumbStyle, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
});

var StyledRangeInput = exports.StyledRangeInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledRangeInput',
  componentId: 'sc-15st9ck-0'
})(['box-sizing:border-box;position:relative;-webkit-appearance:none;border-color:transparent;height:', ';width:100%;padding:0px;cursor:pointer;background:transparent;&:focus{outline:none;}&::-moz-focus-inner{border:none;}&::-moz-focus-outer{border:none;}&::-webkit-slider-runnable-track{', '}&::-webkit-slider-thumb{', ' margin-top:-', 'px;', '}&::-moz-range-track{', '}&::-moz-range-thumb{', '}&::-ms-thumb{', '}', ' &::-ms-track{', ' border-color:transparent;color:transparent;}&::-ms-fill-lower{background:', ';border-color:transparent;}&::-ms-fill-upper{background:', ';border-color:transparent;}', ' ', ''], function (props) {
  return props.theme.global.spacing;
}, rangeTrackStyle, rangeThumbStyle, function (props) {
  return (0, _utils.parseMetricToNum)(props.theme.global.spacing) * 0.425;
}, function (props) {
  return !props.disabled && (0, _styledComponents.css)(['&:hover{box-shadow:0px 0px 0px 2px ', ';}'], (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || props.theme.global.control.color, props.theme));
}, rangeTrackStyle, firefoxMicrosoftThumbStyle, firefoxMicrosoftThumbStyle, function (props) {
  return !props.disabled && (0, _styledComponents.css)(['&:hover::-moz-range-thumb{box-shadow:0px 0px 0px 2px ', ';}&:hover::-ms-thumb{box-shadow:0px 0px 0px 2px ', ';}'], (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || props.theme.global.control.color, props.theme), (0, _utils.normalizeColor)(props.theme.rangeInput.thumb.color || props.theme.global.control.color, props.theme));
}, rangeTrackStyle, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return (0, _utils.normalizeColor)(props.theme.rangeInput.track.color, props.theme);
}, function (props) {
  return props.focus && _utils.focusStyle;
}, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.extend;
});