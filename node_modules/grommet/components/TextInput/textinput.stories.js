'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _2 = require('../');

var _themes = require('../../themes');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTextInput = function (_Component) {
  _inherits(SimpleTextInput, _Component);

  function SimpleTextInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { value: '' }, _this.ref = _react2.default.createRef(), _this.onChange = function (event) {
      return _this.setState({ value: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleTextInput.prototype.render = function render() {
    var value = this.state.value;

    return _react2.default.createElement(
      _2.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_2.TextInput, { ref: this.ref, value: value, onChange: this.onChange })
    );
  };

  return SimpleTextInput;
}(_react.Component);

var suggestions = Array(100).fill().map(function (_, i) {
  return 'suggestion ' + (i + 1);
});

var SuggestionsTextInput = function (_Component2) {
  _inherits(SuggestionsTextInput, _Component2);

  function SuggestionsTextInput() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, SuggestionsTextInput);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { value: '' }, _this2.onChange = function (event) {
      return _this2.setState({ value: event.target.value });
    }, _this2.onSelect = function (event) {
      return _this2.setState({ value: event.suggestion.value });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  SuggestionsTextInput.prototype.render = function render() {
    var value = this.state.value;

    return _react2.default.createElement(
      _2.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_2.TextInput, {
        value: value,
        onChange: this.onChange,
        onSelect: this.onSelect,
        suggestions: suggestions
      })
    );
  };

  return SuggestionsTextInput;
}(_react.Component);

var myCustomTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    drop: {
      background: '#444444',
      shadow: {
        dark: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        light: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      },
      extend: '\n        border-bottom-left-radius: 12px;\n        border-bottom-right-radius: 12px;\n\n        overflow: hidden;\n      '
    },
    elevation: {
      dark: {
        medium: '0 -2px 20px rgba(0,0,0,0.19), 0 4px 6px rgba(0,0,0,0.23)'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '14px'
    }
  }
});

var folks = [{
  name: 'Alan Souza',
  imageUrl: 'https://s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80'
}, {
  name: 'Bryan Jacquot',
  imageUrl: 'https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80'
}, {
  name: 'Chris Carlozzi',
  imageUrl: 'https://s.gravatar.com/avatar/56ea1e2ecd0d3cc85479b2d09e31d071?s=80'
}, {
  name: 'Eric Soderberg',
  imageUrl: 'https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80'
}, {
  name: 'Marlon Parizzotto',
  imageUrl: 'https://s.gravatar.com/avatar/e6684969375a4dcc0aa99f0bfae544c3?s=80'
}, {
  name: 'Tales Chaves',
  imageUrl: 'https://s.gravatar.com/avatar/1f80adca55d9f5d97932ff97f631a4e8?s=80'
}, {
  name: 'Tracy Barmore',
  imageUrl: 'https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3?s=80'
}];

var CustomSuggestionsTextInput = function (_Component3) {
  _inherits(CustomSuggestionsTextInput, _Component3);

  function CustomSuggestionsTextInput() {
    var _temp3, _this3, _ret3;

    _classCallCheck(this, CustomSuggestionsTextInput);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, _Component3.call.apply(_Component3, [this].concat(args))), _this3), _this3.state = { value: '', suggestionOpen: false, suggestedFolks: [] }, _this3.boxRef = (0, _react.createRef)(), _this3.onChange = function (event) {
      return _this3.setState({ value: event.target.value }, function () {
        if (!_this3.state.value.trim()) {
          _this3.setState({ suggestedFolks: [] });
        } else {
          // simulate an async call to the backend
          setTimeout(function () {
            return _this3.setState({ suggestedFolks: folks });
          }, 300);
        }
      });
    }, _this3.onSelect = function (event) {
      return _this3.setState({ value: event.suggestion.value });
    }, _this3.renderSuggestions = function () {
      var _this3$state = _this3.state,
          value = _this3$state.value,
          suggestedFolks = _this3$state.suggestedFolks;


      return suggestedFolks.filter(function (_ref) {
        var name = _ref.name;
        return name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      }).map(function (_ref2, index, list) {
        var name = _ref2.name,
            imageUrl = _ref2.imageUrl;
        return {
          label: _react2.default.createElement(
            _2.Box,
            {
              direction: 'row',
              align: 'center',
              gap: 'small',
              border: index < list.length - 1 ? 'bottom' : undefined,
              pad: 'small'
            },
            _react2.default.createElement(_2.Image, {
              width: '48px',
              src: imageUrl,
              style: { borderRadius: '100%' }
            }),
            _react2.default.createElement(
              _2.Text,
              null,
              _react2.default.createElement(
                'strong',
                null,
                name
              )
            )
          ),
          value: name
        };
      });
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  CustomSuggestionsTextInput.prototype.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  CustomSuggestionsTextInput.prototype.render = function render() {
    var _this4 = this;

    var _state = this.state,
        suggestionOpen = _state.suggestionOpen,
        value = _state.value;


    return _react2.default.createElement(
      _2.Grommet,
      { theme: myCustomTheme, full: true },
      _react2.default.createElement(
        _2.Box,
        { background: 'dark-1', fill: true, align: 'center', pad: { top: 'large' } },
        _react2.default.createElement(
          _2.Box,
          {
            ref: this.boxRef,
            width: 'large',
            direction: 'row',
            align: 'center',
            pad: { horizontal: 'small', vertical: 'xsmall' },
            round: 'small',
            elevation: suggestionOpen ? 'medium' : undefined,
            border: { side: 'all', color: suggestionOpen ? 'transparent' : 'border-dark' },
            style: suggestionOpen ? { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' } : undefined
          },
          _react2.default.createElement(_grommetIcons.Search, { color: 'brand' }),
          _react2.default.createElement(_2.TextInput, {
            type: 'search',
            dropTarget: this.boxRef.current,
            plain: true,
            value: value,
            onChange: this.onChange,
            onSelect: this.onSelect,
            suggestions: this.renderSuggestions(),
            placeholder: 'Enter your name...',
            onSuggestionsOpen: function onSuggestionsOpen() {
              return _this4.setState({ suggestionOpen: true });
            },
            onSuggestionsClose: function onSuggestionsClose() {
              return _this4.setState({ suggestionOpen: false });
            }
          })
        )
      )
    );
  };

  return CustomSuggestionsTextInput;
}(_react.Component);

(0, _react3.storiesOf)('TextInput', module).add('Simple TextInput', function () {
  return _react2.default.createElement(SimpleTextInput, null);
}).add('Suggestions TextInput', function () {
  return _react2.default.createElement(SuggestionsTextInput, null);
}).add('Custom Suggestions', function () {
  return _react2.default.createElement(CustomSuggestionsTextInput, null);
});