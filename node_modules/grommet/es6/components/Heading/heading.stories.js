function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Grid, Heading } from '../';
import { grommet } from '../../themes';

var H = function H(_ref) {
  var level = _ref.level,
      size = _ref.size;
  return React.createElement(
    Heading,
    { level: level, size: size },
    'Heading ' + level + ' ' + size
  );
};

var Set = function Set(_ref2) {
  var size = _ref2.size;
  return React.createElement(
    'div',
    null,
    [1, 2, 3, 4].map(function (level) {
      return React.createElement(H, { key: level, level: level, size: size });
    })
  );
};

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
      React.createElement(
        Grid,
        { columns: 'large', gap: 'medium' },
        React.createElement(Set, { size: 'medium' }),
        React.createElement(Set, { size: 'small' }),
        React.createElement(Set, { size: 'large' })
      )
    );
  };

  return All;
}(Component);

var Color = function (_Component2) {
  _inherits(Color, _Component2);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Color.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Heading,
        { color: 'accent-1' },
        'Colored Heading'
      )
    );
  };

  return Color;
}(Component);

storiesOf('Heading', module).add('All', function () {
  return React.createElement(All, null);
}).add('Color', function () {
  return React.createElement(Color, null);
});