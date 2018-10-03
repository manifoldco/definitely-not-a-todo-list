'use strict';

exports.__esModule = true;
var getBreakpoint = exports.getBreakpoint = function getBreakpoint(windowWidth, theme) {
  return Object.keys(theme.global.breakpoints).map(function (size) {
    return { size: size, value: theme.global.breakpoints[size] };
  }).sort(function (a, b) {
    return b.value > a.value;
  }).reduce(function (size, breakpoint) {
    return windowWidth <= breakpoint.value ? breakpoint.size : size;
  }, 'wide');
};