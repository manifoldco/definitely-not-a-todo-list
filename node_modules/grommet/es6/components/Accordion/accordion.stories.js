function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Bookmark } from 'grommet-icons/es6/icons/Bookmark';
import { CircleInformation } from 'grommet-icons/es6/icons/CircleInformation';
import { FormSubtract } from 'grommet-icons/es6/icons/FormSubtract';
import { FormAdd } from 'grommet-icons/es6/icons/FormAdd';
import { User } from 'grommet-icons/es6/icons/User';


import { Accordion, AccordionPanel, Box, Grommet, Heading, Text, TextInput, ThemeContext } from '../../';
import { grommet } from '../../themes';

var richAccordionTheme = {
  accordion: {
    icons: {
      collapse: FormSubtract,
      expand: FormAdd
    }
  }
};

var SimpleAccordion = function (_Component) {
  _inherits(SimpleAccordion, _Component);

  function SimpleAccordion() {
    _classCallCheck(this, SimpleAccordion);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleAccordion.prototype.render = function render() {
    var _props = this.props,
        animate = _props.animate,
        multiple = _props.multiple,
        rest = _objectWithoutProperties(_props, ['animate', 'multiple']);

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        rest,
        React.createElement(
          Accordion,
          { animate: animate, multiple: multiple },
          React.createElement(
            AccordionPanel,
            { label: 'Panel 1' },
            React.createElement(
              Box,
              { background: 'light-2', style: { height: '800px' } },
              'Panel 1 contents'
            )
          ),
          React.createElement(
            AccordionPanel,
            { label: 'Panel 2' },
            React.createElement(
              Box,
              { background: 'light-2', style: { height: '50px' } },
              'Panel 2 contents'
            )
          ),
          React.createElement(
            AccordionPanel,
            { label: 'Panel 3' },
            React.createElement(
              Box,
              { background: 'light-2', style: { height: '300px' } },
              'Panel 3 contents'
            )
          )
        )
      )
    );
  };

  return SimpleAccordion;
}(Component);

var RichPanel = function (_Component2) {
  _inherits(RichPanel, _Component2);

  function RichPanel() {
    var _temp, _this2, _ret;

    _classCallCheck(this, RichPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
      hovering: false
    }, _this2.renderPanelTitle = function () {
      var _this2$props = _this2.props,
          icon = _this2$props.icon,
          label = _this2$props.label;
      var hovering = _this2.state.hovering;

      return React.createElement(
        Box,
        {
          direction: 'row',
          align: 'center',
          gap: 'small',
          pad: { horizontal: 'small' }
        },
        icon,
        React.createElement(
          Heading,
          { level: 4, color: hovering ? 'dark-1' : 'dark-5' },
          label
        )
      );
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  RichPanel.prototype.render = function render() {
    var _this3 = this;

    var children = this.props.children;

    return React.createElement(
      AccordionPanel,
      {
        label: this.renderPanelTitle(),
        onMouseOver: function onMouseOver() {
          return _this3.setState({ hovering: true });
        },
        onMouseOut: function onMouseOut() {
          return _this3.setState({ hovering: false });
        }
      },
      children
    );
  };

  return RichPanel;
}(Component);

var spinning = React.createElement(
  'svg',
  { version: '1.1', viewBox: '0 0 32 32', width: '32px', height: '32px', fill: '#333333' },
  React.createElement('path', { opacity: '.25', d: 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4' }),
  React.createElement(
    'path',
    { d: 'M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z' },
    React.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', from: '0 16 16', to: '360 16 16', dur: '0.8s', repeatCount: 'indefinite' })
  )
);

var loading = React.createElement(
  Box,
  {
    align: 'center',
    justify: 'center',
    style: { height: '100px' }
  },
  spinning
);

var RichAccordion = function (_Component3) {
  _inherits(RichAccordion, _Component3);

  function RichAccordion() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, RichAccordion);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _Component3.call.apply(_Component3, [this].concat(args))), _this4), _this4.state = {
      highlightLoaded: false
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  RichAccordion.prototype.render = function render() {
    var _this5 = this;

    var highlightLoaded = this.state.highlightLoaded;

    return React.createElement(
      Grommet,
      { full: true, theme: grommet },
      React.createElement(
        Box,
        { fill: true, direction: 'row' },
        React.createElement(
          Box,
          { basis: 'medium', border: 'all' },
          React.createElement(
            Box,
            {
              flex: false,
              border: 'bottom',
              background: 'light-2',
              tag: 'header',
              pad: { horizontal: 'small' }
            },
            React.createElement(
              Heading,
              { level: 3 },
              React.createElement(
                'strong',
                null,
                'About #announcements'
              )
            )
          ),
          React.createElement(
            ThemeContext.Extend,
            { value: richAccordionTheme },
            React.createElement(
              Accordion,
              {
                multiple: true,
                onActive: function onActive(activeIndexes) {
                  if (activeIndexes.includes(1)) {
                    // give sometime to emulate an async call
                    setTimeout(function () {
                      _this5.setState({ highlightLoaded: true }, _this5.reset);
                    }, 1000);
                  }
                }
              },
              React.createElement(
                RichPanel,
                { icon: React.createElement(CircleInformation, null), label: 'Channel Details' },
                React.createElement(
                  Box,
                  {
                    pad: { bottom: 'medium', horizontal: 'small', top: 'small' },
                    gap: 'medium'
                  },
                  React.createElement(
                    Box,
                    { gap: 'xsmall' },
                    React.createElement(
                      Text,
                      { color: 'dark-5' },
                      React.createElement(
                        'strong',
                        null,
                        'Purpose'
                      )
                    ),
                    React.createElement(
                      Text,
                      null,
                      'Used for general announcements like new releases, trainings...'
                    )
                  ),
                  React.createElement(
                    Box,
                    { gap: 'xsmall' },
                    React.createElement(
                      Text,
                      { color: 'dark-5' },
                      React.createElement(
                        'strong',
                        null,
                        'Created'
                      )
                    ),
                    React.createElement(
                      Text,
                      null,
                      'Created by Bryan Jacquot on January 19, 2016'
                    )
                  )
                )
              ),
              React.createElement(
                RichPanel,
                {
                  icon: React.createElement(Bookmark, { color: 'accent-1' }),
                  label: 'Highlights'
                },
                highlightLoaded ? React.createElement(
                  Box,
                  {
                    pad: { bottom: 'medium', horizontal: 'small', top: 'small' },
                    gap: 'medium',
                    overflow: 'auto',
                    style: { maxHeight: '400px' }
                  },
                  React.createElement(
                    Text,
                    { color: 'dark-5' },
                    'Below is the top message in ',
                    React.createElement(
                      'strong',
                      null,
                      '#announcements'
                    ),
                    '.'
                  ),
                  React.createElement(
                    Text,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  React.createElement(
                    Text,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  React.createElement(
                    Text,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  React.createElement(
                    Text,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  React.createElement(
                    Text,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  )
                ) : loading
              ),
              React.createElement(
                RichPanel,
                { icon: React.createElement(User, { color: 'accent-2' }), label: '2,000 members' },
                React.createElement(
                  Box,
                  {
                    pad: { bottom: 'medium', horizontal: 'small', top: 'small' },
                    gap: 'medium'
                  },
                  'Yeah believe me, this channel has 2,000 members.'
                )
              )
            )
          )
        )
      )
    );
  };

  return RichAccordion;
}(Component);

var renderPanelHeader = function renderPanelHeader(title, active) {
  return React.createElement(
    Box,
    {
      direction: 'row',
      align: 'center',
      pad: 'medium',
      gap: 'small'
    },
    React.createElement(
      'strong',
      null,
      React.createElement(
        Text,
        null,
        title
      )
    ),
    React.createElement(
      Text,
      { color: 'brand' },
      active ? '-' : '+'
    )
  );
};

var CustomHeaderAccordion = function (_Component4) {
  _inherits(CustomHeaderAccordion, _Component4);

  function CustomHeaderAccordion() {
    var _temp3, _this6, _ret3;

    _classCallCheck(this, CustomHeaderAccordion);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this6 = _possibleConstructorReturn(this, _Component4.call.apply(_Component4, [this].concat(args))), _this6), _this6.state = {
      activeIndex: [0]
    }, _temp3), _possibleConstructorReturn(_this6, _ret3);
  }

  CustomHeaderAccordion.prototype.render = function render() {
    var _this7 = this;

    var activeIndex = this.state.activeIndex;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Accordion,
        {
          activeIndex: activeIndex,
          onActive: function onActive(newActiveIndex) {
            return _this7.setState({ activeIndex: newActiveIndex });
          }
        },
        React.createElement(
          AccordionPanel,
          {
            header: renderPanelHeader('Panel 1', activeIndex.includes(0))
          },
          React.createElement(
            Box,
            { pad: 'medium', background: 'light-2', style: { height: '800px' } },
            React.createElement(
              Text,
              null,
              'Panel 1 contents'
            ),
            React.createElement(TextInput, null)
          )
        ),
        React.createElement(
          AccordionPanel,
          {
            header: renderPanelHeader('Panel 2', activeIndex.includes(1))
          },
          React.createElement(
            Box,
            { pad: 'medium', background: 'light-2', style: { height: '50px' } },
            React.createElement(
              Text,
              null,
              'Panel 2 contents'
            )
          )
        ),
        React.createElement(
          AccordionPanel,
          {
            header: renderPanelHeader('Panel 3', activeIndex.includes(2))
          },
          React.createElement(
            Box,
            { pad: 'medium', background: 'light-2', style: { height: '300px' } },
            React.createElement(
              Text,
              null,
              'Panel 3 contents'
            )
          )
        )
      )
    );
  };

  return CustomHeaderAccordion;
}(Component);

storiesOf('Accordion', module).add('Simple', function () {
  return React.createElement(SimpleAccordion, null);
}).add('Dark no animation', function () {
  return React.createElement(SimpleAccordion, { animate: false, background: 'dark-2' });
}).add('Multiple', function () {
  return React.createElement(SimpleAccordion, { multiple: true });
}).add('Rich', function () {
  return React.createElement(RichAccordion, null);
}).add('Custom Header', function () {
  return React.createElement(CustomHeaderAccordion, null);
});