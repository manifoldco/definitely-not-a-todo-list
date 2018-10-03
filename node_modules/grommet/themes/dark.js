'use strict';

exports.__esModule = true;
exports.dark = undefined;

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _utils = require('../utils');

var brandColor = '#FFCA58';
var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#111111';
var textColor = '#eeeeee';
var borderColor = 'rgba(255, 255, 255, 0.33)';
var focusColor = accentColors[0];
var activeColor = (0, _polished.rgba)('#666666', 0.5);

var colors = {
  active: activeColor,
  background: backgroundColor,
  black: '#000000',
  border: borderColor,
  brand: brandColor,
  focus: focusColor,
  placeholder: '#AAAAAA',
  text: textColor,
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + '-' + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors['status-' + color] = statusColors[color];
});

var dark = exports.dark = (0, _utils.deepFreeze)({
  global: {
    colors: colors,
    control: {
      color: brandColor
    },
    drop: {
      background: '#333333'
    },
    focus: {
      border: {
        color: (0, _styledComponents.css)(['', ''], function (props) {
          return (0, _utils.colorForName)('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: 'Arial'
    },
    input: {
      weight: 700
    },
    text: {
      dark: textColor,
      light: '#000000'
    }
  },
  anchor: {
    color: brandColor
  },
  icon: {
    color: textColor,
    colors: colors
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: 'rgba(48, 48, 48, 0.5)'
    }
  }
});