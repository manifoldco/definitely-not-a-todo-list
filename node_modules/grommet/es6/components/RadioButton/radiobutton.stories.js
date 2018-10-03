function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, RadioButton } from '../';
import { grommet } from '../../themes';

var SimpleRadioButton = function (_Component) {
  _inherits(SimpleRadioButton, _Component);

  function SimpleRadioButton() {
    _classCallCheck(this, SimpleRadioButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleRadioButton.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(RadioButton, { label: 'Choice 1', name: 'radio' }),
      React.createElement(RadioButton, { label: 'Choice 2', name: 'radio' })
    );
  };

  return SimpleRadioButton;
}(Component);

storiesOf('RadioButton', module).add('Simple RadioButton', function () {
  return React.createElement(SimpleRadioButton, null);
});