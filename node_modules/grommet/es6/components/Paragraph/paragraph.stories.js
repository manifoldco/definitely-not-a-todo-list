function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Paragraph } from '../';
import { grommet } from '../../themes';

var sizes = ['xlarge', 'large', 'medium', 'small'];

var paragraphFiller = '\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n';

var All = function (_Component) {
  _inherits(All, _Component);

  function All() {
    _classCallCheck(this, All);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  All.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      sizes.map(function (size) {
        return React.createElement(
          Paragraph,
          { key: size, size: size },
          'Paragraph ' + size,
          paragraphFiller
        );
      }),
      React.createElement(
        Paragraph,
        { color: 'status-critical' },
        'This is an error message.'
      )
    );
  };

  return All;
}(Component);

storiesOf('Paragraph', module).add('All', function () {
  return React.createElement(All, null);
});