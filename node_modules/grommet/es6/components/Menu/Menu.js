var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';
import styled from 'styled-components';

import { Box } from '../Box';
import { Button } from '../Button';
import { DropButton } from '../DropButton';
import { Keyboard } from '../Keyboard';
import { Text } from '../Text';
import { withForwardRef, withTheme } from '../hocs';
import { evalStyle } from '../../utils';

var ContainerBox = styled(Box).withConfig({
  displayName: 'Menu__ContainerBox',
  componentId: 'sc-17fcys9-0'
})(['max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}']);

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { activeItemIndex: -1, open: false }, _this.buttonRefs = {}, _this.onDropClose = function () {
      _this.setState({
        activeItemIndex: -1,
        open: false
      });
    }, _this.onSelectMenuItem = function (event) {
      var activeItemIndex = _this.state.activeItemIndex;

      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();
        findDOMNode(_this.buttonRefs[activeItemIndex]).click();
      }
    }, _this.onNextMenuItem = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          activeItemIndex = _this$state.activeItemIndex,
          open = _this$state.open;

      if (!open) {
        _this.setState({
          open: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;

        var index = Math.min(activeItemIndex + 1, items.length - 1);
        _this.setState({ activeItemIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _this.onPreviousMenuItem = function (event) {
      event.preventDefault();
      var _this$state2 = _this.state,
          activeItemIndex = _this$state2.activeItemIndex,
          open = _this$state2.open;

      if (!open) {
        _this.setState({
          open: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;

        var index = activeItemIndex === -1 ? items.length - 1 : Math.max(activeItemIndex - 1, 0);
        _this.setState({ activeItemIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Menu.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        dropAlign = _props.dropAlign,
        dropBackground = _props.dropBackground,
        dropTarget = _props.dropTarget,
        forwardRef = _props.forwardRef,
        icon = _props.icon,
        items = _props.items,
        label = _props.label,
        messages = _props.messages,
        onKeyDown = _props.onKeyDown,
        size = _props.size,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'disabled', 'dropAlign', 'dropBackground', 'dropTarget', 'forwardRef', 'icon', 'items', 'label', 'messages', 'onKeyDown', 'size', 'theme']);

    var _state = this.state,
        activeItemIndex = _state.activeItemIndex,
        open = _state.open;


    var MenuIcon = theme.menu.icons.down;
    var iconColor = evalStyle(theme.global.control.color[theme.dark ? 'dark' : 'light'], theme) || 'brand';

    var content = children || React.createElement(
      Box,
      {
        direction: 'row',
        justify: 'start',
        align: 'center',
        pad: 'small',
        gap: label && icon !== false ? 'small' : undefined
      },
      React.createElement(
        Text,
        { size: size },
        label
      ),
      icon !== false ? icon !== true && icon || React.createElement(MenuIcon, { color: iconColor, size: size }) : null
    );

    var controlMirror = React.createElement(
      Box,
      { flex: false },
      React.createElement(
        Button,
        {
          a11yTitle: messages.closeMenu || 'Close Menu',
          onClick: this.onDropClose
        },
        content
      )
    );

    return React.createElement(
      Keyboard,
      {
        onEnter: this.onSelectMenuItem,
        onSpace: this.onSelectMenuItem,
        onDown: this.onNextMenuItem,
        onUp: this.onPreviousMenuItem,
        onEsc: this.onDropClose,
        onTab: this.onDropClose,
        onKeyDown: onKeyDown
      },
      React.createElement(
        'div',
        null,
        React.createElement(
          DropButton,
          _extends({
            ref: forwardRef
          }, rest, {
            a11yTitle: messages.openMenu || 'Open Menu',
            disabled: disabled,
            dropAlign: dropAlign,
            dropTarget: dropTarget,
            open: open,
            onOpen: function onOpen() {
              return _this2.setState({ open: true });
            },
            onClose: function onClose() {
              return _this2.setState({ open: false });
            },
            dropContent: React.createElement(
              ContainerBox,
              { background: dropBackground },
              dropAlign.top === 'top' ? controlMirror : undefined,
              React.createElement(
                Box,
                { overflow: 'auto' },
                items.map(function (item, index) {
                  return React.createElement(
                    Box,
                    { key: 'menuItem_' + index, flex: false },
                    React.createElement(
                      Button,
                      {
                        ref: function ref(_ref) {
                          _this2.buttonRefs[index] = _ref;
                        },
                        active: activeItemIndex === index,
                        hoverIndicator: 'background',
                        onClick: item.onClick ? function () {
                          item.onClick.apply(item, arguments);
                          if (item.close !== false) {
                            _this2.onDropClose();
                          }
                        } : undefined,
                        href: item.href
                      },
                      React.createElement(
                        Box,
                        { align: 'start', pad: 'small', direction: 'row' },
                        item.icon,
                        item.label
                      )
                    )
                  );
                })
              ),
              dropAlign.bottom === 'bottom' ? controlMirror : undefined
            )
          }),
          content
        )
      )
    );
  };

  return Menu;
}(Component);

Menu.defaultProps = {
  dropAlign: { top: 'top', left: 'left' },
  items: [],
  messages: { openMenu: 'Open Menu', closeMenu: 'Close Menu' }
};


var MenuDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  MenuDoc = require('./doc').doc(Menu); // eslint-disable-line global-require
}
var MenuWrapper = compose(withTheme, withForwardRef)(MenuDoc || Menu);

export { MenuWrapper as Menu };