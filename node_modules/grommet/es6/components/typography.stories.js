function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, Heading, Paragraph, Text } from './';
import { grommet } from '../themes';

var paragraphFiller = '\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n';

var Medium = function (_Component) {
  _inherits(Medium, _Component);

  function Medium() {
    _classCallCheck(this, Medium);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Medium.prototype.render = function render() {
    var margin = undefined;
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { pad: 'medium' },
        React.createElement(
          'div',
          null,
          React.createElement(
            Heading,
            { margin: margin },
            'Heading 1 - Medium'
          ),
          React.createElement(
            Text,
            { size: 'xlarge' },
            'Text XLarge'
          ),
          React.createElement(
            Paragraph,
            { size: 'large', margin: margin },
            'Paragraph - Large',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 2, margin: margin },
            'Heading 2 - Medium'
          ),
          React.createElement(
            Text,
            { size: 'large' },
            'Text Large'
          ),
          React.createElement(
            Paragraph,
            { margin: margin },
            'Paragraph - Medium',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 3, margin: margin },
            'Heading 3 - Medium'
          ),
          React.createElement(
            Text,
            null,
            'Text Medium'
          ),
          React.createElement(
            Paragraph,
            { margin: margin },
            'Paragraph - Medium',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 4, margin: margin },
            'Heading 4 - Medium'
          ),
          React.createElement(
            Text,
            { size: 'small' },
            'Text Small'
          ),
          React.createElement(
            Paragraph,
            { size: 'small', margin: margin },
            'Paragraph - Small',
            paragraphFiller
          )
        )
      )
    );
  };

  return Medium;
}(Component);

var Small = function (_Component2) {
  _inherits(Small, _Component2);

  function Small() {
    _classCallCheck(this, Small);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Small.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { pad: 'medium' },
        React.createElement(
          'div',
          null,
          React.createElement(
            Heading,
            { size: 'small' },
            'Heading 1 - Small'
          ),
          React.createElement(
            Text,
            { size: 'large' },
            'Text Large'
          ),
          React.createElement(
            Paragraph,
            null,
            'Paragraph - Medium',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 2, size: 'small' },
            'Heading 2 - Small'
          ),
          React.createElement(
            Text,
            null,
            'Text Medium'
          ),
          React.createElement(
            Paragraph,
            null,
            'Paragraph - Medium',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 3, size: 'small' },
            'Heading 3 - Small'
          ),
          React.createElement(
            Text,
            null,
            'Text Medium'
          ),
          React.createElement(
            Paragraph,
            { size: 'small' },
            'Paragraph - Small',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 4, size: 'small' },
            'Heading 4 - Small'
          ),
          React.createElement(
            Text,
            { size: 'small' },
            'Text Small'
          ),
          React.createElement(
            Paragraph,
            { size: 'small' },
            'Paragraph - Small',
            paragraphFiller
          )
        )
      )
    );
  };

  return Small;
}(Component);

var Large = function (_Component3) {
  _inherits(Large, _Component3);

  function Large() {
    _classCallCheck(this, Large);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  Large.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { pad: 'medium' },
        React.createElement(
          'div',
          null,
          React.createElement(
            Heading,
            { size: 'large' },
            'Heading 1 - Large'
          ),
          React.createElement(
            Text,
            { size: 'xxlarge' },
            'Text XXLarge'
          ),
          React.createElement(
            Paragraph,
            { size: 'xlarge' },
            'Paragraph - XLarge',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 2, size: 'large' },
            'Heading 2 - Large'
          ),
          React.createElement(
            Text,
            { size: 'xlarge' },
            'Text XLarge'
          ),
          React.createElement(
            Paragraph,
            { size: 'large' },
            'Paragraph - Large',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 3, size: 'large' },
            'Heading 3 - Large'
          ),
          React.createElement(
            Text,
            { size: 'large' },
            'Text Large'
          ),
          React.createElement(
            Paragraph,
            null,
            'Paragraph - Medium',
            paragraphFiller
          ),
          React.createElement(
            Heading,
            { level: 4, size: 'large' },
            'Heading 4 - Large'
          ),
          React.createElement(
            Text,
            null,
            'Text Medium'
          ),
          React.createElement(
            Paragraph,
            null,
            'Paragraph - Medium',
            paragraphFiller
          )
        )
      )
    );
  };

  return Large;
}(Component);

storiesOf('Typography', module).add('Small', function () {
  return React.createElement(Small, null);
}).add('Medium', function () {
  return React.createElement(Medium, null);
}).add('Large', function () {
  return React.createElement(Large, null);
});