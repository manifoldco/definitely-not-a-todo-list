var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Box, CheckBox, FormField, Select, TextArea, TextInput } from '../';
import { grommet } from '../../themes';

var allSuggestions = Array(100).fill().map(function (_, i) {
  return 'suggestion ' + (i + 1);
});

var FormFieldTextInput = function (_Component) {
  _inherits(FormFieldTextInput, _Component);

  function FormFieldTextInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, FormFieldTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { value: '', suggestions: allSuggestions }, _this.onChange = function (event) {
      var value = event.target.value;
      var exp = new RegExp(value, 'i');
      var suggestions = allSuggestions.filter(function (s) {
        return exp.test(s);
      });
      _this.setState({ value: value, suggestions: suggestions });
    }, _this.onSelect = function (event) {
      return _this.setState({ value: event.suggestion });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FormFieldTextInput.prototype.render = function render() {
    var _state = this.state,
        value = _state.value,
        suggestions = _state.suggestions;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        FormField,
        _extends({ label: 'Label', htmlFor: 'text-input' }, this.props),
        React.createElement(TextInput, {
          id: 'text-input',
          placeholder: 'placeholder',
          value: value,
          onChange: this.onChange,
          onSelect: this.onSelect,
          suggestions: suggestions
        })
      )
    );
  };

  return FormFieldTextInput;
}(Component);

var FormFieldTextArea = function FormFieldTextArea(props) {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(
      FormField,
      _extends({ label: 'Label', htmlFor: 'text-area' }, props),
      React.createElement(TextArea, { id: 'text-area', placeholder: 'placeholder' })
    )
  );
};

var FormFieldCheckBox = function FormFieldCheckBox(props) {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(
      FormField,
      _extends({ label: 'Label', htmlFor: 'check-box' }, props),
      React.createElement(
        Box,
        { pad: { horizontal: 'small', vertical: 'xsmall' } },
        React.createElement(CheckBox, { id: 'check-box', label: 'CheckBox' })
      )
    )
  );
};

var FormFieldToggle = function FormFieldToggle(props) {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(
      FormField,
      _extends({ label: 'Label', htmlFor: 'check-box' }, props),
      React.createElement(
        Box,
        { pad: { horizontal: 'small', vertical: 'xsmall' } },
        React.createElement(CheckBox, { id: 'check-box', label: 'CheckBox', toggle: true })
      )
    )
  );
};

var allOptions = Array(100).fill().map(function (_, i) {
  return 'option ' + (i + 1);
});

var FormFieldSelect = function (_Component2) {
  _inherits(FormFieldSelect, _Component2);

  function FormFieldSelect() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, FormFieldSelect);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { value: '', options: allOptions }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  FormFieldSelect.prototype.render = function render() {
    var _this3 = this;

    var _state2 = this.state,
        value = _state2.value,
        options = _state2.options;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        FormField,
        _extends({ label: 'Label', htmlFor: 'select' }, this.props),
        React.createElement(Select, {
          id: 'select',
          placeholder: 'placeholder',
          options: options,
          value: value,
          onChange: function onChange(_ref) {
            var option = _ref.option;
            return _this3.setState({ value: option });
          }
        })
      )
    );
  };

  return FormFieldSelect;
}(Component);

var FormFieldHelpError = function FormFieldHelpError(props) {
  return React.createElement(
    Grommet,
    { theme: grommet },
    React.createElement(
      FormField,
      _extends({
        label: 'Label',
        htmlFor: 'text-input'
      }, props, {
        help: 'Text to help the user know what is possible',
        error: 'Text to call attention to an issue with this field'
      }),
      React.createElement(TextInput, {
        id: 'text-input',
        placeholder: 'placeholder',
        value: 'Value',
        onChange: function onChange() {}
      })
    )
  );
};

storiesOf('FormField', module).add('TextInput', function () {
  return React.createElement(FormFieldTextInput, null);
}).add('TextArea', function () {
  return React.createElement(FormFieldTextArea, null);
}).add('Select', function () {
  return React.createElement(FormFieldSelect, null);
}).add('CheckBox', function () {
  return React.createElement(FormFieldCheckBox, null);
}).add('Toggle', function () {
  return React.createElement(FormFieldToggle, null);
}).add('Help and error', function () {
  return React.createElement(FormFieldHelpError, null);
});