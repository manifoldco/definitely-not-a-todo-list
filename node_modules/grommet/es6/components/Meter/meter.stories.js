function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Meter } from '../';
import { grommet } from '../../themes';

var BarMeter = function (_Component) {
  _inherits(BarMeter, _Component);

  function BarMeter() {
    _classCallCheck(this, BarMeter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BarMeter.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(Meter, {
        type: 'bar',
        background: 'light-2',
        values: [{ value: 30 }]
      })
    );
  };

  return BarMeter;
}(Component);

var CircleMeter = function (_Component2) {
  _inherits(CircleMeter, _Component2);

  function CircleMeter() {
    _classCallCheck(this, CircleMeter);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CircleMeter.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(Meter, {
        type: 'circle',
        background: 'light-2',
        values: [{ value: 30 }]
      })
    );
  };

  return CircleMeter;
}(Component);

storiesOf('Meter', module).add('Bar Meter', function () {
  return React.createElement(BarMeter, null);
}).add('Circle Meter', function () {
  return React.createElement(CircleMeter, null);
});