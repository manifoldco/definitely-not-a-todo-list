var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, CheckBox } from '../';
import { grommet } from '../../themes';

var SimpleCheckBox = function (_Component) {
  _inherits(SimpleCheckBox, _Component);

  function SimpleCheckBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleCheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { checked: false }, _this.onChange = function (event) {
      return _this.setState({ checked: event.target.checked });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleCheckBox.prototype.render = function render() {
    var checked = this.state.checked;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(CheckBox, _extends({}, this.props, {
        label: 'Choice',
        checked: checked,
        onChange: this.onChange
      }))
    );
  };

  return SimpleCheckBox;
}(Component);

storiesOf('CheckBox', module).add('Simple', function () {
  return React.createElement(SimpleCheckBox, null);
}).add('Toggle', function () {
  return React.createElement(SimpleCheckBox, { toggle: true });
});