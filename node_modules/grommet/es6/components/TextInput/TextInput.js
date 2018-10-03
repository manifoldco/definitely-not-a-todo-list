var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, isValidElement } from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';

import { Box } from '../Box';
import { Button } from '../Button';
import { Drop } from '../Drop';
import { InfiniteScroll } from '../InfiniteScroll';
import { Keyboard } from '../Keyboard';
import { withAnnounce, withForwardRef, withTheme } from '../hocs';

import { StyledTextInput, StyledTextInputContainer, StyledPlaceholder, StyledSuggestions } from './StyledTextInput';

function renderLabel(suggestion) {
  if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
    return suggestion.label || suggestion.value;
  }
  return suggestion;
}

function stringLabel(suggestion) {
  if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
    if (suggestion.label && typeof suggestion.label === 'string') {
      return suggestion.label;
    }
    return suggestion.value;
  }
  return suggestion;
}

var ContainerBox = styled(Box).withConfig({
  displayName: 'TextInput__ContainerBox',
  componentId: 'sc-1ai0c08-0'
})(['max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}']);

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeSuggestionIndex: -1,
      inputRef: React.createRef(),
      showDrop: false
    }, _this.announce = function (message, mode) {
      var _this$props = _this.props,
          announce = _this$props.announce,
          suggestions = _this$props.suggestions;

      if (suggestions && suggestions.length > 0) {
        announce(message, mode);
      }
    }, _this.announceSuggestionsCount = function () {
      var _this$props2 = _this.props,
          suggestions = _this$props2.suggestions,
          suggestionsCount = _this$props2.messages.suggestionsCount;

      _this.announce(suggestions.length + ' ' + suggestionsCount);
    }, _this.announceSuggestionsExist = function () {
      var suggestionsExist = _this.props.messages.suggestionsExist;

      _this.announce(suggestionsExist);
    }, _this.announceSuggestionsIsOpen = function () {
      var suggestionIsOpen = _this.props.messages.suggestionIsOpen;

      _this.announce(suggestionIsOpen);
    }, _this.resetSuggestions = function () {
      // delay this to avoid re-render interupting event delivery
      // https://github.com/grommet/grommet/issues/2154
      // 10ms was chosen empirically based on ie11 using TextInput
      // with and without a FormField.
      clearTimeout(_this.resetTimer);
      _this.resetTimer = setTimeout(function () {
        var suggestions = _this.props.suggestions;

        if (suggestions && suggestions.length) {
          _this.setState({
            activeSuggestionIndex: -1,
            showDrop: true,
            selectedSuggestionIndex: -1
          }, _this.announceSuggestionsCount);
        }
      }, 10);
    }, _this.getSelectedSuggestionIndex = function () {
      var _this$props3 = _this.props,
          suggestions = _this$props3.suggestions,
          value = _this$props3.value;

      var suggestionValues = suggestions.map(function (suggestion) {
        if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
          return suggestion.value;
        }
        return suggestion;
      });
      return suggestionValues.indexOf(value);
    }, _this.onShowSuggestions = function () {
      // Get values of suggestions, so we can highlight selected suggestion
      var selectedSuggestionIndex = _this.getSelectedSuggestionIndex();

      _this.setState({
        showDrop: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      }, _this.announceSuggestionsIsOpen);
    }, _this.onNextSuggestion = function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state = _this.state,
          activeSuggestionIndex = _this$state.activeSuggestionIndex,
          showDrop = _this$state.showDrop;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this.onShowSuggestions();
        } else {
          event.preventDefault();
          var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);
          _this.setState({ activeSuggestionIndex: index }, function () {
            return _this.announceSuggestion(index);
          });
        }
      }
    }, _this.onPreviousSuggestion = function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state2 = _this.state,
          activeSuggestionIndex = _this$state2.activeSuggestionIndex,
          showDrop = _this$state2.showDrop;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        var index = Math.max(activeSuggestionIndex - 1, 0);
        _this.setState({ activeSuggestionIndex: index }, function () {
          return _this.announceSuggestion(index);
        });
      }
    }, _this.onClickSuggestion = function (suggestion) {
      var onSelect = _this.props.onSelect;
      var inputRef = _this.state.inputRef;

      _this.setState({ showDrop: false });
      if (onSelect) {
        onSelect({ target: inputRef.current, suggestion: suggestion });
      }
    }, _this.onSuggestionSelect = function (event) {
      var _this$props4 = _this.props,
          onSelect = _this$props4.onSelect,
          suggestions = _this$props4.suggestions;
      var _this$state3 = _this.state,
          activeSuggestionIndex = _this$state3.activeSuggestionIndex,
          inputRef = _this$state3.inputRef;

      _this.setState({ showDrop: false });
      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        var suggestion = suggestions[activeSuggestionIndex];
        if (onSelect) {
          onSelect({ target: inputRef.current, suggestion: suggestion });
        }
      }
    }, _this.onFocus = function (event) {
      var _this$props5 = _this.props,
          onFocus = _this$props5.onFocus,
          suggestions = _this$props5.suggestions;

      if (suggestions && suggestions.length > 0) {
        _this.announceSuggestionsExist();
      }
      _this.resetSuggestions();
      if (onFocus) {
        onFocus(event);
      }
    }, _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;

      clearTimeout(_this.resetTimer);
      if (onBlur) {
        onBlur(event);
      }
    }, _this.onInput = function (event) {
      var onInput = _this.props.onInput;

      _this.resetSuggestions();
      if (onInput) {
        onInput(event);
      }
    }, _this.onDropClose = function () {
      _this.setState({ showDrop: false });
    }, _this.renderSuggestions = function () {
      var _this$props6 = _this.props,
          suggestions = _this$props6.suggestions,
          theme = _this$props6.theme;
      var _this$state4 = _this.state,
          activeSuggestionIndex = _this$state4.activeSuggestionIndex,
          selectedSuggestionIndex = _this$state4.selectedSuggestionIndex;


      return React.createElement(
        StyledSuggestions,
        { theme: theme },
        React.createElement(
          InfiniteScroll,
          { items: suggestions, step: theme.select.step },
          function (suggestion, index) {
            var plain = (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object' && _typeof(isValidElement(suggestion.label));
            return React.createElement(
              'li',
              { key: stringLabel(suggestion) + '-' + index },
              React.createElement(
                Button,
                {
                  active: activeSuggestionIndex === index || selectedSuggestionIndex === index,
                  fill: true,
                  hoverIndicator: 'background',
                  onClick: function onClick() {
                    return _this.onClickSuggestion(suggestion);
                  }
                },
                plain ? renderLabel(suggestion) : React.createElement(
                  Box,
                  { align: 'start', pad: 'small' },
                  renderLabel(suggestion)
                )
              )
            );
          }
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TextInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef,
        suggestions = nextProps.suggestions;
    var inputRef = prevState.inputRef,
        showDrop = prevState.showDrop;

    var nextInputRef = forwardRef || inputRef;

    var newState = {};
    if (nextInputRef !== inputRef) {
      newState.inputRef = nextInputRef;
    }

    if (showDrop && (!suggestions || !suggestions.length)) {
      newState.showDrop = false;
    }

    return Object.keys(newState) ? newState : null;
  };

  TextInput.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.resetTimer);
  };

  TextInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _props = this.props,
        onSuggestionsOpen = _props.onSuggestionsOpen,
        onSuggestionsClose = _props.onSuggestionsClose,
        suggestions = _props.suggestions;

    if (this.state.showDrop !== prevState.showDrop) {
      if (this.state.showDrop && onSuggestionsOpen) {
        onSuggestionsOpen();
      } else if (onSuggestionsClose) {
        onSuggestionsClose();
      }
    }

    if (!this.state.showDrop && suggestions && (!prevProps.suggestions || !prevProps.suggestions.length)) {
      this.resetSuggestions();
    }
  };

  TextInput.prototype.announceSuggestion = function announceSuggestion(index) {
    var _props2 = this.props,
        suggestions = _props2.suggestions,
        enterSelect = _props2.messages.enterSelect;

    if (suggestions && suggestions.length > 0) {
      var labelMessage = stringLabel(suggestions[index]);
      this.announce(labelMessage + ' ' + enterSelect);
    }
  };

  TextInput.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props,
        defaultValue = _props3.defaultValue,
        dropAlign = _props3.dropAlign,
        dropTarget = _props3.dropTarget,
        id = _props3.id,
        placeholder = _props3.placeholder,
        plain = _props3.plain,
        theme = _props3.theme,
        value = _props3.value,
        onKeyDown = _props3.onKeyDown,
        rest = _objectWithoutProperties(_props3, ['defaultValue', 'dropAlign', 'dropTarget', 'id', 'placeholder', 'plain', 'theme', 'value', 'onKeyDown']);

    delete rest.onInput; // se we can manage in onInputChange()
    delete rest.forwardRef;
    delete rest.onSuggestionsOpen;
    delete rest.onSuggestionsClose;
    var _state = this.state,
        inputRef = _state.inputRef,
        showDrop = _state.showDrop;
    // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var drop = void 0;
    if (showDrop) {
      drop = React.createElement(
        Drop,
        {
          id: id ? 'text-input-drop__' + id : undefined,
          align: dropAlign,
          responsive: false,
          target: dropTarget || inputRef.current,
          onClickOutside: function onClickOutside() {
            return _this2.setState({ showDrop: false });
          },
          onEsc: function onEsc() {
            return _this2.setState({ showDrop: false });
          }
        },
        React.createElement(
          ContainerBox,
          { overflow: 'auto' },
          this.renderSuggestions()
        )
      );
    }
    return React.createElement(
      StyledTextInputContainer,
      { plain: plain },
      placeholder && typeof placeholder !== 'string' && !value ? React.createElement(
        StyledPlaceholder,
        { theme: theme },
        placeholder
      ) : null,
      React.createElement(
        Keyboard,
        {
          onEnter: this.onSuggestionSelect,
          onEsc: this.onDropClose,
          onTab: this.onDropClose,
          onUp: this.onPreviousSuggestion,
          onDown: this.onNextSuggestion,
          onKeyDown: onKeyDown
        },
        React.createElement(StyledTextInput, _extends({
          id: id,
          ref: inputRef,
          autoComplete: 'off',
          plain: plain,
          placeholder: typeof placeholder === 'string' ? placeholder : undefined,
          theme: theme
        }, rest, {
          defaultValue: renderLabel(defaultValue),
          value: renderLabel(value),
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onInput: this.onInput
        }))
      ),
      drop
    );
  };

  return TextInput;
}(Component);

TextInput.defaultProps = {
  dropAlign: { top: 'bottom', left: 'left' },
  messages: {
    enterSelect: '(Press Enter to Select)',
    suggestionsCount: 'suggestions available',
    suggestionsExist: 'This input has suggestions use arrow keys to navigate',
    suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
  }
};


var TextInputDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TextInputDoc = require('./doc').doc(TextInput); // eslint-disable-line global-require
}
var TextInputWrapper = compose(withTheme, withAnnounce, withForwardRef)(TextInputDoc || TextInput);

export { TextInputWrapper as TextInput };