import styled, { css } from 'styled-components';

import { activeStyle, backgroundStyle, colorForName, colorIsDark, focusStyle, lapAndUp, normalizeColor } from '../../utils';

var basicStyle = function basicStyle(props) {
  return css(['border:', ' solid ', ';border-radius:', ';color:', ';'], props.theme.button.border.width, colorForName(normalizeColor(props.colorValue || props.theme.button.border.color || props.theme.global.control.color || 'brand', props.theme), props.theme), props.theme.button.border.radius, (props.theme.button.color || props.theme.global.text.color)[props.theme.dark ? 'dark' : 'light']);
};

var primaryStyle = function primaryStyle(props) {
  return css(['', ' border-radius:', ';svg{fill:', ';stroke:', ';transition:none;}'], backgroundStyle(normalizeColor(props.colorValue || props.theme.button.primary.color || props.theme.global.control.color || 'brand', props.theme), props.theme), props.theme.button.border.radius, props.theme.global.text.color[colorIsDark(colorForName('brand', props.theme)) ? 'dark' : 'light'], props.theme.global.text.color[colorIsDark(colorForName('brand', props.theme)) ? 'dark' : 'light']);
};

var disabledStyle = css(['opacity:', ';cursor:default;'], function (props) {
  return props.theme.button.disabled.opacity;
});

function getHoverColor(props) {
  if (props.colorValue) {
    return colorForName(props.colorValue, props.theme);
  }
  return normalizeColor(props.theme.button.border.color || props.theme.global.control.color, props.theme);
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var background = void 0;
  if (hoverIndicator === true || hoverIndicator === 'background') {
    background = theme.global.hover.background;
  } else {
    background = hoverIndicator;
  }
  return css(['', ' color:', ';'], backgroundStyle(background, theme), normalizeColor(theme.global.hover.color, theme));
}

var hoverStyle = css(['&:hover{', ' ', ' ', '}'], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && css(['box-shadow:0px 0px 0px 2px ', ';'], getHoverColor(props));
}, function (props) {
  return !props.plain && !props.primary && css(['svg{fill:', ';stroke:', ';transition:none;}'], props.theme.global.hover.textColor, props.theme.global.hover.textColor);
});

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n';

var plainStyle = css(['color:inherit;border:none;padding:0;text-align:inherit;']);

export var StyledButton = styled.button.withConfig({
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
  return !props.disabled && props.active && activeStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.plain && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, lapAndUp('\n    transition: 0.1s ease-in-out;\n  '), function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.hasIcon && !props.hasLabel && !props.plain && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
}, function (props) {
  return props.theme.button.extend;
});