"use strict";

exports.__esModule = true;
var colorForName = exports.colorForName = function colorForName(name, theme) {
  return theme.global.colors[name] || name;
};

var parseHexToRGB = function parseHexToRGB(color) {
  return (
    // https://stackoverflow.com/a/42429333
    color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
      return parseInt(v, 16);
    })
  );
};

var canExtractRGBArray = function canExtractRGBArray(color) {
  return (/^#/.test(color) || /^rgb/.test(color)
  );
};

var getRGBArray = function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB(color);
  } else if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }
  return color;
};

var colorIsDark = exports.colorIsDark = function colorIsDark(color) {
  var _getRGBArray = getRGBArray(color),
      red = _getRGBArray[0],
      green = _getRGBArray[1],
      blue = _getRGBArray[2];
  // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};

var getRGBA = exports.getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray2 = getRGBArray(color),
        red = _getRGBArray2[0],
        green = _getRGBArray2[1],
        blue = _getRGBArray2[2];

    return "rgba(" + red + ", " + green + ", " + blue + ", " + (opacity || 1) + ")";
  }
  return undefined;
};

var normalizeColor = exports.normalizeColor = function normalizeColor(color, theme) {
  // If the color has a light or dark object, use that
  var result = color;
  if (color) {
    if (theme.dark && color.dark) {
      result = color.dark;
    } else if (!theme.dark && color.light) {
      result = color.light;
    }
  }
  return result;
};