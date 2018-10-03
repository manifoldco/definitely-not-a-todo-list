var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { css } from 'styled-components';

import { colorForName, colorIsDark, getRGBA } from './colors';
import { evalStyle } from './styles';

export var normalizeBackground = function normalizeBackground(background, theme) {
  // If the background has a light or dark object, use that
  var result = background;
  if (background) {
    if (theme.dark && background.dark && typeof background.dark !== 'boolean') {
      result = background.dark;
    } else if (!theme.dark && background.light && typeof background.light !== 'boolean') {
      result = background.light;
    }
    result = evalStyle(result, theme);
  }
  return result;
};

export var backgroundIsDark = function backgroundIsDark(backgroundArg, theme) {
  var background = normalizeBackground(backgroundArg, theme);
  var dark = void 0;
  if (background) {
    if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
      if (typeof background.dark === 'boolean') {
        dark = background.dark;
      } else if (background.color && (
      // weak opacity means we keep the existing darkness
      !background.opacity || background.opacity !== 'weak')) {
        var color = colorForName(background.color, theme);
        if (color) {
          dark = colorIsDark(color);
        }
      }
    } else {
      var _color = colorForName(background, theme);
      if (_color) {
        dark = colorIsDark(_color);
      }
    }
  }
  return dark;
};

export var backgroundStyle = function backgroundStyle(backgroundArg, theme) {
  // If the background has a light or dark object, use that
  var background = normalizeBackground(backgroundArg, theme);

  if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
    if (background.image) {
      var color = void 0;
      if (background.dark === false) {
        color = theme.global.text.color.light;
      } else if (background.dark) {
        color = theme.global.text.color.dark;
      } else {
        color = 'inherit';
      }
      return css(['background:', ' no-repeat;background-position:', ';background-size:cover;color:', ';'], background.image, background.position || 'center center', color);
    } else if (background.color) {
      var _color2 = colorForName(background.color, theme);
      var backgroundColor = getRGBA(_color2, background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity]) || _color2;
      return css(['background:', ';', ''], backgroundColor, (!background.opacity || background.opacity !== 'weak') && 'color: ' + theme.global.text.color[background.dark || colorIsDark(backgroundColor) ? 'dark' : 'light'] + ';');
    } else if (background.dark === false) {
      return css(['color:', ';'], theme.global.text.color.light);
    } else if (background.dark) {
      return css(['color:', ';'], theme.global.text.color.dark);
    }
    return undefined;
  }

  if (background) {
    if (background.lastIndexOf('url', 0) === 0) {
      return css(['background:', ' no-repeat center center;background-size:cover;'], background);
    }
    var _color3 = colorForName(background, theme);
    if (_color3) {
      return css(['background:', ';color:', ';'], _color3, theme.global.text.color[colorIsDark(_color3) ? 'dark' : 'light']);
    }
  }

  return undefined;
};