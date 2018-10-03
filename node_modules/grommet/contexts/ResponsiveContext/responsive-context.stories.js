'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _utils = require('../../utils');

var _themes = require('../../themes');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customBreakpoints = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    breakpoints: {
      medium: 800
    }
  }
});

(0, _react3.storiesOf)('ResponsiveContext', module).add('Custom Breakpoints', function () {
  return _react2.default.createElement(
    _.Grommet,
    { theme: customBreakpoints, full: true },
    _react2.default.createElement(
      _.ResponsiveContext.Consumer,
      null,
      function (size) {
        return _react2.default.createElement(
          _.Box,
          { fill: true, background: 'brand' },
          _react2.default.createElement(
            _.Heading,
            null,
            'Hi, I\'m ',
            size,
            ', resize me!'
          )
        );
      }
    )
  );
});