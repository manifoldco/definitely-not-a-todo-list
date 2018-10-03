function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from 'grommet-icons/es6/icons/Attraction';
import { Car } from 'grommet-icons/es6/icons/Car';
import { TreeOption } from 'grommet-icons/es6/icons/TreeOption';


import { Grommet, Box, Carousel } from '../';

var SimpleCarousel = function (_Component) {
  _inherits(SimpleCarousel, _Component);

  function SimpleCarousel() {
    _classCallCheck(this, SimpleCarousel);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleCarousel.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Box,
        { justify: 'center', align: 'center' },
        React.createElement(
          Carousel,
          null,
          React.createElement(
            Box,
            { pad: 'xlarge', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          ),
          React.createElement(
            Box,
            { pad: 'xlarge', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          ),
          React.createElement(
            Box,
            { pad: 'xlarge', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return SimpleCarousel;
}(Component);

storiesOf('Carousel', module).add('Simple Carousel', function () {
  return React.createElement(SimpleCarousel, null);
});