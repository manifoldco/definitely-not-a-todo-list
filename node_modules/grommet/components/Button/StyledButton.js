'use strict';

exports.__esModule = true;
exports.StyledButton = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicStyle = function basicStyle(props) {
  return (0, _styledComponents.css)(['border:', ' solid ', ';border-radius:', ';color:', ';'], props.theme.button.border.width, (0, _utils.colorForName)((0, _utils.normalizeColor)(props.colorValue || props.theme.button.border.color || props.theme.global.control.color || 'brand', props.theme), props.theme), props.theme.button.border.radius, (props.theme.button.color || props.theme.global.text.color)[props.theme.dark ? 'dark' : 'light']);
};

var primaryStyle = function primaryStyle(props) {
  return (0, _styledComponents.css)(['', ' border-radius:', ';svg{fill:', ';stroke:', ';transition:none;}'], (0, _utils.backgroundStyle)((0, _utils.normalizeColor)(props.colorValue || props.theme.button.primary.color || props.theme.global.control.color || 'brand', props.theme), props.theme), props.theme.button.border.radius, props.theme.global.text.color[(0, _utils.colorIsDark)((0, _utils.colorForName)('brand', props.theme)) ? 'dark' : 'light'], props.theme.global.text.color[(0, _utils.colorIsDark)((0, _utils.colorForName)('brand', props.theme)) ? 'dark' : 'light']);
};

var disabledStyle = (0, _styledComponents.css)(['opacity:', ';cursor:default;'], function (props) {
  return props.theme.button.disabled.opacity;
});

function getHoverColor(props) {
  if (props.colorValue) {
    return (0, _utils.colorForName)(props.colorValue, props.theme);
  }
  return (0, _utils.normalizeColor)(props.theme.button.border.color || props.theme.global.control.color, props.theme);
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var background = void 0;
  if (hoverIndicator === true || hoverIndicator === 'background') {
    background = theme.global.hover.background;
  } else {
    background = hoverIndicator;
  }
  return (0, _styledComponents.css)(['', ' color:', ';'], (0, _utils.backgroundStyle)(background, theme), (0, _utils.normalizeColor)(theme.global.hover.color, theme));
}

var hoverStyle = (0, _styledComponents.css)(['&:hover{', ' ', ' ', '}'], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && (0, _styledComponents.css)(['box-shadow:0px 0px 0px 2px ', ';'], getHoverColor(props));
}, function (props) {
  return !props.plain && !props.primary && (0, _styledComponents.css)(['svg{fill:', ';stroke:', ';transition:none;}'], props.theme.global.hover.textColor, props.theme.global.hover.textColor);
});

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n';

var plainStyle = (0, _styledComponents.css)(['color:inherit;border:none;padding:0;text-align:inherit;']);

var StyledButton = exports.StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'StyledButton',
  componentId: 'sc-323bzc-0'
})(['display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && _utils.activeStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.plain && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && _utils.focusStyle;
}, (0, _utils.lapAndUp)('\n    transition: 0.1s ease-in-out;\n  '), function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.hasIcon && !props.hasLabel && !props.plain && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
}, function (props) {
  return props.theme.button.extend;
});