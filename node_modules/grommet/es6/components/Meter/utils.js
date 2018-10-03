var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { colorForName } from '../../utils';

export var strokeProps = function strokeProps(color, theme) {
  var result = {};
  if (color) {
    if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object') {
      result.stroke = colorForName(color.color, theme);
      if (color.opacity) {
        result.strokeOpacity = color.opacity === true ? theme.global.opacity.medium : theme.global.opacity[color.opacity];
      }
    } else {
      result.stroke = colorForName(color, theme);
    }
  }
  return result;
};

var neutralExp = /^neutral-\d+/;

export var defaultColor = function defaultColor(index, theme) {
  var neutralColors = Object.keys(theme.global.colors).filter(function (k) {
    return neutralExp.test(k);
  });
  return neutralColors[index % neutralColors.length];
};