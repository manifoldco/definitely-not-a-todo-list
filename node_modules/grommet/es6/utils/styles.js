import { css } from 'styled-components';

import { normalizeColor } from './colors';
import { palm, parseMetricToNum } from './mixins';
import { backgroundStyle } from './background';

export var activeStyle = css(['', ' color:', ';'], function (props) {
  return backgroundStyle(normalizeColor(props.theme.global.hover.background, props.theme), props.theme);
}, function (props) {
  return normalizeColor(props.theme.global.hover.color, props.theme);
});

export var baseStyle = css(['font-family:', ';font-size:', ';line-height:', ';', ' ', ' box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;'], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return props.theme.global.font.size;
}, function (props) {
  return props.theme.global.font.height;
}, function (props) {
  return props.theme.global.colors.text && 'color: ' + props.theme.global.colors.text + ';';
}, function (props) {
  return props.theme.global.colors.background && 'background: ' + props.theme.global.colors.background + ';';
});

export var controlBorderStyle = css(['border:', ' solid ', ';border-radius:', ';'], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return (props.theme.global.control.border.color || props.theme.global.control.border.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.global.control.border.radius;
});

export var edgeStyle = function edgeStyle(kind, data, responsive, theme) {
  if (typeof data === 'string') {
    return css(['', ':', ';', ''], kind, theme.global.edgeSize[data], responsive ? palm('\n        ' + kind + ': ' + theme.global.edgeSize.narrow[data] + ';\n      ') : '');
  }
  var result = [];
  if (data.horizontal) {
    result.push(css(['', '-left:', ';', '-right:', ';', ''], kind, theme.global.edgeSize[data.horizontal], kind, theme.global.edgeSize[data.horizontal], responsive ? palm('\n        ' + kind + '-left: ' + theme.global.edgeSize.narrow[data.horizontal] + ';\n        ' + kind + '-right: ' + theme.global.edgeSize.narrow[data.horizontal] + ';\n      ') : ''));
  }
  if (data.vertical) {
    result.push(css(['', '-top:', ';', '-bottom:', ';', ''], kind, theme.global.edgeSize[data.vertical], kind, theme.global.edgeSize[data.vertical], responsive ? palm('\n        ' + kind + '-top: ' + theme.global.edgeSize.narrow[data.vertical] + ';\n        ' + kind + '-bottom: ' + theme.global.edgeSize.narrow[data.vertical] + ';\n      ') : ''));
  }
  if (data.top) {
    result.push(css(['', '-top:', ';', ''], kind, theme.global.edgeSize[data.top], responsive ? palm('\n        ' + kind + '-top: ' + theme.global.edgeSize.narrow[data.top] + ';\n      ') : ''));
  }
  if (data.bottom) {
    result.push(css(['', '-bottom:', ';', ''], kind, theme.global.edgeSize[data.bottom], responsive ? palm('\n        ' + kind + '-bottom: ' + theme.global.edgeSize.narrow[data.bottom] + ';\n      ') : ''));
  }
  if (data.left) {
    result.push(css(['', '-left:', ';', ''], kind, theme.global.edgeSize[data.left], responsive ? palm('\n        ' + kind + '-left: ' + theme.global.edgeSize.narrow[data.left] + ';\n      ') : ''));
  }
  if (data.right) {
    result.push(css(['', '-right:', ';', ''], kind, theme.global.edgeSize[data.right], responsive ? palm('\n        ' + kind + '-right: ' + theme.global.edgeSize.narrow[data.left] + ';\n      ') : ''));
  }
  return result;
};

// focus also supports clickable elements inside svg
export var focusStyle = css(['> circle,> ellipse,> line,> path,> polygon,> polyline,> rect{outline:', ' solid 2px;}border-color:', ';box-shadow:0 0 2px 2px ', ';'], function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
});

export var inputStyle = css(['box-sizing:border-box;font-size:inherit;border:none;-webkit-appearance:none;padding:', 'px;outline:none;background:transparent;color:inherit;', ' margin:0;', ' ', '::-webkit-search-decoration{-webkit-appearance:none;}'], function (props) {
  return parseMetricToNum(props.theme.global.spacing) / 2 - parseMetricToNum(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.global.input.weight && css(['font-weight:', ';'], props.theme.global.input.weight);
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, controlBorderStyle);

export var evalStyle = function evalStyle(arg, theme) {
  if (arg && Array.isArray(arg) && typeof arg[0] === 'function') {
    return arg[0]({ theme: theme });
  }
  return arg;
};