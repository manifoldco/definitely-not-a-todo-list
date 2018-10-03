var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Children, Component } from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { Text } from '../Text';
import { withFocus, withForwardRef, withTheme } from '../hocs';

import { StyledButton } from './StyledButton';

var AnchorStyledButton = StyledButton.withComponent('a');

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Button should not have children if icon or label is provided');
    }
    return _this;
  }

  Button.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        color = _props.color,
        forwardRef = _props.forwardRef,
        children = _props.children,
        icon = _props.icon,
        fill = _props.fill,
        focus = _props.focus,
        href = _props.href,
        label = _props.label,
        onClick = _props.onClick,
        plain = _props.plain,
        reverse = _props.reverse,
        theme = _props.theme,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'color', 'forwardRef', 'children', 'icon', 'fill', 'focus', 'href', 'label', 'onClick', 'plain', 'reverse', 'theme', 'type']);

    var Tag = href ? AnchorStyledButton : StyledButton;

    var buttonLabel = typeof label === 'string' ? React.createElement(
      Text,
      null,
      React.createElement(
        'strong',
        null,
        label
      )
    ) : label;

    var first = reverse ? buttonLabel : icon;
    var second = reverse ? icon : buttonLabel;

    var disabled = !href && !onClick && ['reset', 'submit'].indexOf(type) === -1;

    return React.createElement(
      Tag,
      _extends({}, rest, {
        ref: forwardRef,
        'aria-label': a11yTitle,
        colorValue: color,
        disabled: disabled,
        hasIcon: !!icon,
        hasLabel: !!label,
        fillContainer: fill,
        focus: focus,
        href: href,
        onClick: onClick,
        plain: typeof plain !== 'undefined' ? plain : Children.count(children) > 0 || icon && !label,
        theme: theme,
        type: !href ? type : undefined
      }),
      first || second ? React.createElement(
        Box,
        {
          direction: 'row',
          align: 'center',
          justify: 'center',
          gap: 'small',
          pad: icon && !plain ? 'small' : undefined
        },
        first,
        second
      ) : children
    );
  };

  return Button;
}(Component);

Button.defaultProps = {
  type: 'button',
  focusIndicator: true
};


var ButtonDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  ButtonDoc = require('./doc').doc(Button); // eslint-disable-line global-require
}
var ButtonWrapper = compose(withFocus, withTheme, withForwardRef)(ButtonDoc || Button);

export { ButtonWrapper as Button };