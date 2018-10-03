import React from 'react';
import { storiesOf } from '@storybook/react';

import { deepMerge } from '../../utils';
import { grommet } from '../../themes';

import { Box, Grommet, Heading, ResponsiveContext } from '../../';

var customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      medium: 800
    }
  }
});

storiesOf('ResponsiveContext', module).add('Custom Breakpoints', function () {
  return React.createElement(
    Grommet,
    { theme: customBreakpoints, full: true },
    React.createElement(
      ResponsiveContext.Consumer,
      null,
      function (size) {
        return React.createElement(
          Box,
          { fill: true, background: 'brand' },
          React.createElement(
            Heading,
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