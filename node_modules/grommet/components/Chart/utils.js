'use strict';

exports.__esModule = true;
var normalizeValues = exports.normalizeValues = function normalizeValues(values) {
  return (values || []).map(function (value, index) {
    if (Array.isArray(value)) {
      return { value: value };
    } else if (typeof value === 'number') {
      return { value: [index, value] };
    }
    return value;
  });
};

var normalizeBounds = exports.normalizeBounds = function normalizeBounds(bounds, values) {
  var result = bounds;
  if (!result) {
    result = [[0, 1], [0, 1]];
    (values || []).forEach(function (value) {
      result[0][0] = Math.min(result[0][0], value.value[0]);
      result[0][1] = Math.max(result[0][1], value.value[0]);
      result[1][0] = Math.min(result[1][0], value.value[1]);
      result[1][1] = Math.max(result[1][1], value.value[1]);
    });
  }
  return result;
};