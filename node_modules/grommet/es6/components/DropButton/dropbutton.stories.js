function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Close } from 'grommet-icons/es6/icons/Close';
import { FormDown } from 'grommet-icons/es6/icons/FormDown';


import { Grommet, Box, Button, Calendar, DropButton, Heading, Text } from '../';
import { grommet } from '../../themes';

var DropContent = function DropContent(_ref) {
  var onClose = _ref.onClose;
  return React.createElement(
    Box,
    { pad: 'small' },
    React.createElement(
      Box,
      { direction: 'row', justify: 'between', align: 'center' },
      React.createElement(
        Heading,
        { level: 3, margin: 'small' },
        'Heading'
      ),
      React.createElement(Button, { icon: React.createElement(Close, null), onClick: onClose })
    ),
    React.createElement(
      Text,
      null,
      'Content'
    )
  );
};

var SimpleDropButton = function (_Component) {
  _inherits(SimpleDropButton, _Component);

  function SimpleDropButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleDropButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onClose = function () {
      _this.setState({ open: false });
      setTimeout(function () {
        return _this.setState({ open: undefined });
      }, 1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleDropButton.prototype.render = function render() {
    var _this2 = this;

    var open = this.state.open;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(DropButton, {
        label: 'Open',
        open: open,
        onClose: function onClose() {
          return _this2.setState({ open: undefined });
        },
        dropContent: React.createElement(DropContent, { onClose: this.onClose })
      })
    );
  };

  return SimpleDropButton;
}(Component);

var CalendarDropButton = function (_Component2) {
  _inherits(CalendarDropButton, _Component2);

  function CalendarDropButton() {
    var _temp2, _this3, _ret2;

    _classCallCheck(this, CalendarDropButton);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.state = { date: undefined }, _this3.onClose = function () {
      _this3.setState({ open: false });
      setTimeout(function () {
        return _this3.setState({ open: undefined });
      }, 1);
    }, _this3.onSelect = function (date) {
      return _this3.setState({ date: date, open: false });
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  CalendarDropButton.prototype.render = function render() {
    var _this4 = this;

    var _state = this.state,
        date = _state.date,
        open = _state.open;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        DropButton,
        {
          open: open,
          onClose: function onClose() {
            return _this4.setState({ open: false });
          },
          onOpen: function onOpen() {
            return _this4.setState({ open: true });
          },
          dropContent: React.createElement(Calendar, { date: date, onSelect: this.onSelect })
        },
        React.createElement(
          Box,
          { direction: 'row', gap: 'medium', align: 'center', pad: 'small' },
          React.createElement(
            Text,
            null,
            date ? new Date(date).toLocaleDateString() : 'Select date'
          ),
          React.createElement(FormDown, { color: 'brand' })
        )
      )
    );
  };

  return CalendarDropButton;
}(Component);

storiesOf('DropButton', module).add('Simple', function () {
  return React.createElement(SimpleDropButton, null);
}).add('Calendar', function () {
  return React.createElement(CalendarDropButton, null);
});