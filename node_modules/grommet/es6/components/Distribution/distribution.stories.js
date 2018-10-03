function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, Distribution, Text } from '../';
import { grommet } from '../../themes';

var SimpleDistribution = function (_Component) {
  _inherits(SimpleDistribution, _Component);

  function SimpleDistribution() {
    _classCallCheck(this, SimpleDistribution);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleDistribution.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Distribution,
        {
          basis: 'medium',
          values: [{ value: 50, color: 'light-3' }, { value: 30, color: 'neutral-1' }, { value: 20, color: 'brand' }, { value: 10, color: 'light-3' }, { value: 5, color: 'neutral-1' }]
        },
        function (value) {
          return React.createElement(
            Box,
            { pad: 'xsmall', background: value.color, fill: true },
            React.createElement(
              Text,
              { size: 'large' },
              value.value
            )
          );
        }
      )
    );
  };

  return SimpleDistribution;
}(Component);

storiesOf('Distribution', module).add('Simple Distribution', function () {
  return React.createElement(SimpleDistribution, null);
});