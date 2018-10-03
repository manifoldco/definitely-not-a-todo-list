function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from 'grommet-icons/es6/icons/Attraction';
import { Car } from 'grommet-icons/es6/icons/Car';
import { TreeOption } from 'grommet-icons/es6/icons/TreeOption';


import { Grommet, Anchor, Box, Button, Text } from '../';
import { grommet } from '../../themes';

var SimpleBox = function (_Component) {
  _inherits(SimpleBox, _Component);

  function SimpleBox() {
    _classCallCheck(this, SimpleBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        {
          direction: 'row-responsive',
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: 'dark-2'
        },
        React.createElement(
          Box,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'light-2', opacity: 'strong' }
          },
          React.createElement(Attraction, { size: 'xlarge' }),
          React.createElement(
            Text,
            null,
            'Party'
          ),
          React.createElement(Anchor, { href: '', label: 'Link' }),
          React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
        ),
        React.createElement(
          Box,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'accent-2', opacity: 'weak' }
          },
          React.createElement(TreeOption, { size: 'xlarge' }),
          React.createElement(
            Text,
            null,
            'Nature'
          ),
          React.createElement(Anchor, { href: '', label: 'Link' }),
          React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
        ),
        React.createElement(
          Box,
          { pad: 'xlarge', align: 'center', background: 'dark-3' },
          React.createElement(Car, { size: 'xlarge', color: 'light-2' }),
          React.createElement(
            Text,
            null,
            'Travel'
          ),
          React.createElement(Anchor, { href: '', label: 'Link' }),
          React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
        )
      )
    );
  };

  return SimpleBox;
}(Component);

var customColorBox = {
  global: {
    colors: {
      'brand-gradient': 'linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)'
    },
    font: {
      family: 'Arial'
    }
  }
};

var CustomColorBox = function (_Component2) {
  _inherits(CustomColorBox, _Component2);

  function CustomColorBox() {
    _classCallCheck(this, CustomColorBox);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CustomColorBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: customColorBox },
      React.createElement(
        Box,
        {
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: { color: 'brand-gradient', dark: true },
          round: 'large'
        },
        React.createElement(
          Text,
          null,
          'I have a linear gradient background'
        )
      )
    );
  };

  return CustomColorBox;
}(Component);

storiesOf('Box', module).add('Simple Box', function () {
  return React.createElement(SimpleBox, null);
}).add('Custom color', function () {
  return React.createElement(CustomColorBox, null);
});