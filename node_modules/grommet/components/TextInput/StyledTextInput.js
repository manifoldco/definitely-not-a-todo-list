'use strict';

exports.__esModule = true;
exports.StyledSuggestions = exports.StyledPlaceholder = exports.StyledTextInputContainer = exports.StyledTextInput = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placeholderColor = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return props.theme.global.colors.placeholder;
});

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var plainStyle = (0, _styledComponents.css)(['border:none;']);

var StyledTextInput = exports.StyledTextInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledTextInput',
  componentId: 'sc-1x30a0s-0'
})(['', ' width:100%;', ' ', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}', ''], _utils.inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderColor, placeholderColor, placeholderColor, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});

var StyledTextInputContainer = exports.StyledTextInputContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledTextInput__StyledTextInputContainer',
  componentId: 'sc-1x30a0s-1'
})(['position:relative;width:100%;']);

var StyledPlaceholder = exports.StyledPlaceholder = _styledComponents2.default.div.withConfig({
  displayName: 'StyledTextInput__StyledPlaceholder',
  componentId: 'sc-1x30a0s-2'
})(['position:absolute;left:', 'px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;'], function (props) {
  return (0, _utils.parseMetricToNum)(props.theme.global.spacing) / 2 - (0, _utils.parseMetricToNum)(props.theme.global.control.border.width);
});

var StyledSuggestions = exports.StyledSuggestions = _styledComponents2.default.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions',
  componentId: 'sc-1x30a0s-3'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);