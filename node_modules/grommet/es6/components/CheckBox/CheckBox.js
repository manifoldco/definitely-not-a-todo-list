var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFocus, withForwardRef, withTheme } from '../hocs';
import { removeUndefined } from '../../utils/object';

import { StyledCheckBox, StyledCheckBoxContainer, StyledCheckBoxInput, StyledCheckBoxBox, StyledCheckBoxToggle, StyledCheckBoxKnob } from './StyledCheckBox';

var CheckBox = function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox() {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CheckBox.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        focus = _props.focus,
        forwardRef = _props.forwardRef,
        id = _props.id,
        label = _props.label,
        name = _props.name,
        onChange = _props.onChange,
        reverse = _props.reverse,
        theme = _props.theme,
        toggle = _props.toggle,
        rest = _objectWithoutProperties(_props, ['checked', 'disabled', 'focus', 'forwardRef', 'id', 'label', 'name', 'onChange', 'reverse', 'theme', 'toggle']);

    var normalizedLabel = typeof label === 'string' ? React.createElement(
      'div',
      null,
      label
    ) : label;

    var hidden = void 0;
    if (disabled && checked) {
      hidden = React.createElement('input', { name: name, type: 'hidden', value: 'true' });
    }

    var Icon = theme.checkBox.icons.checked;

    var visual = toggle ? React.createElement(
      StyledCheckBoxToggle,
      { focus: focus, theme: theme },
      React.createElement(StyledCheckBoxKnob, { theme: theme })
    ) : React.createElement(
      StyledCheckBoxBox,
      { focus: focus, theme: theme },
      Icon ? React.createElement(Icon, null) : React.createElement(
        'svg',
        { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet' },
        React.createElement('path', { fill: 'none', d: 'M6,11.3 L10.3,16 L18,6.2' })
      )
    );

    return React.createElement(
      StyledCheckBoxContainer,
      _extends({}, removeUndefined({ htmlFor: id, disabled: disabled, reverse: reverse }), {
        theme: theme
      }),
      React.createElement(
        StyledCheckBox,
        { theme: theme },
        React.createElement(StyledCheckBoxInput, _extends({}, rest, {
          ref: forwardRef,
          type: 'checkbox'
        }, removeUndefined({ id: id, name: name, checked: checked, disabled: disabled, onChange: onChange }), {
          theme: theme
        })),
        visual
      ),
      normalizedLabel,
      hidden
    );
  };

  return CheckBox;
}(Component);

var CheckBoxDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  CheckBoxDoc = require('./doc').doc(CheckBox); // eslint-disable-line global-require
}
var CheckBoxWrapper = compose(withFocus, withTheme, withForwardRef)(CheckBoxDoc || CheckBox);

export { CheckBoxWrapper as CheckBox };