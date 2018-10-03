function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, RangeSelector, Stack, Text } from '../';
import { grommet } from '../../themes';

var SimpleRangeSelector = function (_Component) {
  _inherits(SimpleRangeSelector, _Component);

  function SimpleRangeSelector() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleRangeSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { values: [2, 8] }, _this.onChange = function (values) {
      return _this.setState({ values: values });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleRangeSelector.prototype.render = function render() {
    var values = this.state.values;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Stack,
        null,
        React.createElement(
          Box,
          { direction: 'row', justify: 'between' },
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (value) {
            return React.createElement(
              Box,
              { key: value, pad: 'small', border: false },
              React.createElement(
                Text,
                { style: { fontFamily: 'monospace' } },
                value
              )
            );
          })
        ),
        React.createElement(RangeSelector, {
          direction: 'horizontal',
          invert: false,
          min: 0,
          max: 9,
          size: 'full',
          round: 'small',
          values: values,
          onChange: this.onChange
        })
      )
    );
  };

  return SimpleRangeSelector;
}(Component);

storiesOf('RangeSelector', module).add('Simple RangeSelector', function () {
  return React.createElement(SimpleRangeSelector, null);
});