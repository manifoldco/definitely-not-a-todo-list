var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { Anchor } from '../Anchor';
import { Box } from '../Box';

var SkipLink = function SkipLink(_ref) {
  var id = _ref.id,
      label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['id', 'label']);

  return React.createElement(
    Box,
    { margin: 'small' },
    React.createElement(Anchor, _extends({
      href: '#' + id,
      label: label
    }, rest))
  );
};
export { SkipLink };