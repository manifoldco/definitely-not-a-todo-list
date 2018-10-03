var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Children, cloneElement, Component } from 'react';
import { compose } from 'recompose';

import { parseMetricToNum } from '../../utils';
import { Box } from '../Box';
import { Text } from '../Text';
import { withFocus, withTheme } from '../hocs';

var FormField = function (_Component) {
  _inherits(FormField, _Component);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  FormField.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        error = _props.error,
        focus = _props.focus,
        help = _props.help,
        htmlFor = _props.htmlFor,
        label = _props.label,
        style = _props.style,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'error', 'focus', 'help', 'htmlFor', 'label', 'style', 'theme']);

    var formField = theme.formField;
    var border = formField.border;


    var contents = children;

    var borderColor = void 0;
    if (focus) {
      borderColor = 'focus';
    } else if (error) {
      borderColor = formField.border.error.color[theme.dark ? 'dark' : 'light'] || 'status-critical';
    } else {
      borderColor = border && border.color[theme.dark ? 'dark' : 'light'] || (theme.dark ? 'border-dark' : 'border-light');
    }
    var abut = void 0;
    var outerStyle = style;

    if (border) {
      var normalizedChildren = Children.map(children, function (child) {
        if (child) {
          return cloneElement(child, { plain: true, focusIndicator: false });
        }
        return child;
      });

      contents = React.createElement(
        Box,
        {
          ref: function ref(_ref) {
            _this2.childContainerRef = _ref;
          },
          border: border.position === 'inner' ? _extends({}, border, { side: border.side || 'bottom', color: borderColor }) : undefined
        },
        normalizedChildren
      );

      abut = border.position === 'outer' && (border.side === 'all' || border.side === 'horizontal' || !border.side);
      if (abut) {
        // marginBottom is set to overlap adjacent fields
        var marginBottom = '-1px';
        if (border.size) {
          marginBottom = '-' + parseMetricToNum(theme.global.borderSize[border.size]) + 'px';
        }
        outerStyle = _extends({
          position: focus ? 'relative' : undefined,
          marginBottom: marginBottom,
          zIndex: focus ? 10 : undefined
        }, style);
      }
    }

    return React.createElement(
      Box,
      _extends({
        border: border && border.position === 'outer' ? _extends({}, border, { color: borderColor }) : undefined,
        margin: abut ? undefined : { bottom: 'small' },
        style: outerStyle
      }, rest),
      label || help ? React.createElement(
        Box,
        {
          margin: { vertical: 'xsmall', horizontal: 'small' },
          gap: 'xsmall'
        },
        label ? React.createElement(
          Text,
          _extends({ tag: 'label', htmlFor: htmlFor }, formField.label),
          label
        ) : undefined,
        help ? React.createElement(
          Text,
          _extends({}, formField.help, {
            color: formField.help.color[theme.dark ? 'dark' : 'light']
          }),
          help
        ) : undefined
      ) : undefined,
      contents,
      error ? React.createElement(
        Box,
        { margin: { vertical: 'xsmall', horizontal: 'small' } },
        React.createElement(
          Text,
          _extends({}, formField.error, {
            color: formField.error.color[theme.dark ? 'dark' : 'light']
          }),
          error
        )
      ) : undefined
    );
  };

  return FormField;
}(Component);

var FormFieldDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  FormFieldDoc = require('./doc').doc(FormField); // eslint-disable-line global-require
}
var FormFieldWrapper = compose(withFocus, withTheme)(FormFieldDoc || FormField);

export { FormFieldWrapper as FormField };