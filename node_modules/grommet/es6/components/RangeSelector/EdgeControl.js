var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { Keyboard } from '../Keyboard';
import { colorForName, evalStyle, normalizeColor, parseMetricToNum } from '../../utils';
import { withForwardRef } from '../hocs';

var DIRECTION_PROPS = {
  horizontal: {
    cursor: 'col-resize',
    fill: 'vertical'
  },
  vertical: {
    cursor: 'row-resize',
    fill: 'horizontal'
  }
};

var EdgeControl = function (_Component) {
  _inherits(EdgeControl, _Component);

  function EdgeControl() {
    var _temp, _this, _ret;

    _classCallCheck(this, EdgeControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  EdgeControl.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        color = _props.color,
        direction = _props.direction,
        edge = _props.edge,
        forwardRef = _props.forwardRef,
        onDecrease = _props.onDecrease,
        onIncrease = _props.onIncrease,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['color', 'direction', 'edge', 'forwardRef', 'onDecrease', 'onIncrease', 'theme']);

    var focused = this.state.focused;
    var _DIRECTION_PROPS$dire = DIRECTION_PROPS[direction],
        cursor = _DIRECTION_PROPS$dire.cursor,
        fill = _DIRECTION_PROPS$dire.fill;

    var size = parseMetricToNum(theme.global.spacing) / 2;
    var halfSize = size / 2;
    var keyboardProps = direction === 'vertical' ? { onUp: onDecrease, onDown: onIncrease } : { onLeft: onDecrease, onRight: onIncrease };
    var boxDirection = direction === 'vertical' ? 'row' : 'column';
    return React.createElement(
      Keyboard,
      keyboardProps,
      React.createElement(
        Box,
        {
          direction: boxDirection,
          style: { flex: '0 0 1px' },
          overflow: 'visible',
          align: 'center'
        },
        React.createElement(
          Box,
          _extends({
            ref: forwardRef,
            direction: boxDirection,
            justify: 'center',
            align: 'center',
            fill: fill,
            margin: 'xsmall',
            style: { cursor: cursor, minWidth: size, minHeight: size, zIndex: 10 },
            onFocus: function onFocus() {
              return _this2.setState({ focused: true });
            },
            onBlur: function onBlur() {
              return _this2.setState({ focused: false });
            }
          }, rest),
          React.createElement(
            Box,
            {
              direction: boxDirection,
              round: 'small',
              focus: focused
            },
            React.createElement(
              'svg',
              { viewBox: '0 0 ' + size + ' ' + size, width: size, height: size },
              React.createElement('circle', {
                cx: halfSize,
                cy: halfSize,
                r: halfSize,
                fill: color ? colorForName(color, theme) : evalStyle(normalizeColor(theme.global.control.color, theme), theme)
              })
            )
          )
        )
      )
    );
  };

  return EdgeControl;
}(Component);

var EdgeControlWrapper = compose(withForwardRef)(EdgeControl);

export { EdgeControlWrapper as EdgeControl };