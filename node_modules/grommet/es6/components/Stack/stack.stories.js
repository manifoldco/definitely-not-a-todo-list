function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, Stack } from '../';
import { grommet } from '../../themes';

var SimpleStack = function (_Component) {
  _inherits(SimpleStack, _Component);

  function SimpleStack() {
    _classCallCheck(this, SimpleStack);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleStack.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Stack,
        { anchor: 'center' },
        React.createElement(Box, { pad: 'large', background: 'neutral-1' }),
        React.createElement(Box, { pad: 'small', background: 'accent-1' })
      )
    );
  };

  return SimpleStack;
}(Component);

var FillStack = function (_Component2) {
  _inherits(FillStack, _Component2);

  function FillStack() {
    _classCallCheck(this, FillStack);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  FillStack.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet, full: true },
      React.createElement(
        Stack,
        { fill: true },
        React.createElement(
          Box,
          { background: 'brand', fill: true },
          'Test'
        )
      )
    );
  };

  return FillStack;
}(Component);

storiesOf('Stack', module).add('Simple Stack', function () {
  return React.createElement(SimpleStack, null);
}).add('Fill Stack', function () {
  return React.createElement(FillStack, null);
});