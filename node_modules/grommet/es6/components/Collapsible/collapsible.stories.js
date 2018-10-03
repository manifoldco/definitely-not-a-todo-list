var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { FormDown } from 'grommet-icons/es6/icons/FormDown';
import { FormNext } from 'grommet-icons/es6/icons/FormNext';


import { Box, Button, Collapsible, Grommet, Text } from '../';
import { grommet } from '../../themes';

var SimpleCollapsible = function (_Component) {
  _inherits(SimpleCollapsible, _Component);

  function SimpleCollapsible() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleCollapsible);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleCollapsible.prototype.render = function render() {
    var _this2 = this;

    var open = this.state.open;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { align: 'start', gap: 'small' },
        React.createElement(Button, { primary: true, onClick: function onClick() {
            return _this2.setState({ open: !_this2.state.open });
          }, label: 'Toggle' }),
        React.createElement(
          Collapsible,
          { open: open },
          React.createElement(
            Box,
            { background: 'light-2', round: 'medium', pad: 'medium', align: 'center', justify: 'center' },
            React.createElement(
              Text,
              null,
              'This is a box inside a Collapsible component'
            )
          )
        ),
        React.createElement(
          Text,
          null,
          'This is other content outside the Collapsible box'
        )
      )
    );
  };

  return SimpleCollapsible;
}(Component);

var MenuButton = function MenuButton(_ref) {
  var label = _ref.label,
      open = _ref.open,
      submenu = _ref.submenu,
      rest = _objectWithoutProperties(_ref, ['label', 'open', 'submenu']);

  var Icon = open ? FormDown : FormNext;
  return React.createElement(
    Button,
    _extends({
      hoverIndicator: 'background'
    }, rest),
    React.createElement(
      Box,
      {
        margin: submenu ? { left: 'small' } : undefined,
        direction: 'row',
        align: 'center',
        pad: 'xsmall'
      },
      React.createElement(Icon, { color: 'brand' }),
      React.createElement(
        Text,
        { size: 'small' },
        label
      )
    )
  );
};

var NestedCollapsible = function (_Component2) {
  _inherits(NestedCollapsible, _Component2);

  function NestedCollapsible() {
    var _temp2, _this3, _ret2;

    _classCallCheck(this, NestedCollapsible);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.state = {
      openMenu1: false,
      openSubmenu1: false,
      openMenu2: false
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  NestedCollapsible.prototype.render = function render() {
    var _this4 = this;

    var _state = this.state,
        openMenu1 = _state.openMenu1,
        openSubmenu1 = _state.openSubmenu1,
        openMenu2 = _state.openMenu2;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { width: 'small' },
        React.createElement(MenuButton, {
          open: openMenu1,
          label: 'Accordion',
          onClick: function onClick() {
            var newOpenMenu1 = !_this4.state.openMenu1;

            _this4.setState({
              openMenu1: newOpenMenu1,
              openSubmenu1: !newOpenMenu1 ? false : openSubmenu1
            });
          }
        }),
        React.createElement(
          Collapsible,
          { open: openMenu1 },
          React.createElement(MenuButton, {
            submenu: true,
            open: openSubmenu1,
            label: 'Accordion Basics',
            onClick: function onClick() {
              return _this4.setState({
                openSubmenu1: !_this4.state.openSubmenu1
              });
            }
          }),
          React.createElement(
            Collapsible,
            { open: openSubmenu1 },
            React.createElement(
              Button,
              { hoverIndicator: 'background', onClick: function onClick() {
                  return alert('Submenu item 1 selected');
                } },
              React.createElement(
                Box,
                { margin: { left: 'medium' }, direction: 'row', align: 'center', pad: 'xsmall' },
                React.createElement(
                  Text,
                  { size: 'small' },
                  'Submenu item 1'
                )
              )
            ),
            React.createElement(
              Button,
              { hoverIndicator: 'background', onClick: function onClick() {
                  return alert('Submenu item 2 selected');
                } },
              React.createElement(
                Box,
                { margin: { left: 'medium' }, direction: 'row', align: 'center', pad: 'xsmall' },
                React.createElement(
                  Text,
                  { size: 'small' },
                  'Submenu item 2'
                )
              )
            )
          )
        ),
        React.createElement(MenuButton, {
          open: openMenu2,
          label: 'Button',
          onClick: function onClick() {
            return _this4.setState({
              openMenu2: !_this4.state.openMenu2
            });
          }
        }),
        React.createElement(
          Collapsible,
          { open: openMenu2 },
          React.createElement(
            Button,
            { hoverIndicator: 'background', onClick: function onClick() {
                return alert('Submenu item 1 selected');
              } },
            React.createElement(
              Box,
              { margin: { left: 'medium' }, direction: 'row', align: 'center', pad: 'xsmall' },
              React.createElement(
                Text,
                { size: 'small' },
                'Submenu item 1'
              )
            )
          )
        )
      )
    );
  };

  return NestedCollapsible;
}(Component);

storiesOf('Collapsible', module).add('Default', function () {
  return React.createElement(SimpleCollapsible, null);
}).add('Nested', function () {
  return React.createElement(NestedCollapsible, null);
});