var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { Button } from '../Button';
import { Collapsible } from '../Collapsible';
import { Heading } from '../Heading';
import { withTheme, withForwardRef } from '../hocs';
import { evalStyle, normalizeColor } from '../../utils';

import { AccordionContext } from '../Accordion/AccordionContext';

var AccordionPanel = function (_Component) {
  _inherits(AccordionPanel, _Component);

  function AccordionPanel() {
    var _temp, _this, _ret;

    _classCallCheck(this, AccordionPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hover: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AccordionPanel.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        header = _props.header,
        label = _props.label,
        theme = _props.theme,
        _onMouseOut = _props.onMouseOut,
        _onMouseOver = _props.onMouseOver,
        rest = _objectWithoutProperties(_props, ['children', 'header', 'label', 'theme', 'onMouseOut', 'onMouseOver']);

    var hover = this.state.hover;


    var dark = theme.dark;
    var iconColor = evalStyle(normalizeColor(theme.accordion.icons.color || theme.global.control.color, theme), theme);

    return React.createElement(
      AccordionContext,
      null,
      function (panelContext) {
        var active = panelContext.active,
            animate = panelContext.animate,
            onPanelChange = panelContext.onPanelChange;

        var AccordionIcon = active ? theme.accordion.icons.collapse : theme.accordion.icons.expand;

        return React.createElement(
          Box,
          { flex: false },
          React.createElement(
            Button,
            {
              role: 'tab',
              'aria-selected': active,
              'aria-expanded': active,
              onClick: onPanelChange,
              onMouseOver: function onMouseOver() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                _this2.setState({ hover: dark ? 'light-4' : 'dark-6' });
                if (_onMouseOver) {
                  _onMouseOver(args);
                }
              },
              onMouseOut: function onMouseOut() {
                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = arguments[_key3];
                }

                _this2.setState({ hover: undefined });
                if (_onMouseOut) {
                  _onMouseOut(args);
                }
              }
            },
            header || React.createElement(
              Box,
              _extends({
                align: 'center',
                direction: 'row',
                justify: 'between'
              }, rest),
              typeof label === 'string' ? React.createElement(
                Box,
                { pad: { horizontal: 'xsmall' } },
                React.createElement(
                  Heading,
                  {
                    level: 4,
                    color: hover
                  },
                  label
                )
              ) : label,
              AccordionIcon && React.createElement(
                Box,
                { pad: { horizontal: 'small' } },
                React.createElement(AccordionIcon, { color: iconColor })
              )
            )
          ),
          React.createElement(
            Box,
            {
              border: { side: 'bottom', color: dark ? 'border-dark' : 'border-light' }
            },
            animate ? React.createElement(
              Collapsible,
              {
                open: active
              },
              children
            ) : active && children
          )
        );
      }
    );
  };

  return AccordionPanel;
}(Component);

var AccordionPanelDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  AccordionPanelDoc = require('./doc').doc(AccordionPanel); // eslint-disable-line global-require
}
var AccordionPanelWrapper = compose(withTheme, withForwardRef)(AccordionPanelDoc || AccordionPanel);

export { AccordionPanelWrapper as AccordionPanel };