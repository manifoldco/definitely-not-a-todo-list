'use strict';

exports.__esModule = true;
exports.withIconTheme = exports.withAnnounce = exports.withForwardRef = exports.withTheme = exports.withFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _contexts = require('grommet-icons/contexts');

var _contexts2 = require('../contexts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withFocus = function withFocus(WrappedComponent) {
  var FocusableComponent = function (_Component) {
    _inherits(FocusableComponent, _Component);

    function FocusableComponent() {
      var _temp, _this, _ret;

      _classCallCheck(this, FocusableComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.mouseActive = false, _this.state = {
        focus: false,
        wrappedRef: _react2.default.createRef()
      }, _this.componentDidMount = function () {
        var wrappedRef = _this.state.wrappedRef;

        window.addEventListener('mousedown', _this.handleActiveMouse);

        // we could be using onFocus in the wrapper node itself
        // but react does not invoke it if you programically
        // call wrapperNode.focus() inside componentWillUnmount
        // see Drop "this.originalFocusedElement.focus();" for reference
        var wrapperNode = (0, _reactDom.findDOMNode)(wrappedRef.current);
        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.addEventListener('focus', _this.setFocus);
        }
      }, _this.componentWillUnmount = function () {
        var wrappedRef = _this.state.wrappedRef;

        window.removeEventListener('mousedown', _this.handleActiveMouse);
        var wrapperNode = (0, _reactDom.findDOMNode)(wrappedRef.current);
        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.removeEventListener('focus', _this.setFocus);
        }
        clearTimeout(_this.focusTimer);
        clearTimeout(_this.mouseTimer);
      }, _this.handleActiveMouse = function () {
        // from https://marcysutton.com/button-focus-hell/
        _this.mouseActive = true;
        // this avoids showing focus when clicking around
        clearTimeout(_this.mouseTimer);
        // empirical number to reset mouseActive after
        // some time has passed without mousedown
        _this.mouseTimer = setTimeout(function () {
          _this.mouseActive = false;
        }, 150);
      }, _this.setFocus = function () {
        // delay setting focus to avoid interupting events,
        // 1ms was chosen empirically based on ie11 using Select and TextInput
        // with and without a FormField.
        clearTimeout(_this.focusTimer);
        _this.focusTimer = setTimeout(function () {
          if (!_this.state.focus && !_this.mouseActive) {
            _this.setState({ focus: true });
          }
        }, 1);
      }, _this.resetFocus = function () {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = setTimeout(function () {
          if (_this.state.focus) {
            _this.setState({ focus: false });
          }
        }, 1);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    FocusableComponent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var withFocusRef = nextProps.withFocusRef;
      var wrappedRef = prevState.wrappedRef;

      var nextWrappedRef = withFocusRef || wrappedRef;
      if (nextWrappedRef !== wrappedRef) {
        return { wrappedRef: nextWrappedRef };
      }
      return null;
    }; // not in state because it doesn't affect rendering

    FocusableComponent.prototype.render = function render() {
      var _this2 = this;

      var _props = this.props,
          _onFocus = _props.onFocus,
          _onBlur = _props.onBlur,
          withFocusRef = _props.withFocusRef,
          rest = _objectWithoutProperties(_props, ['onFocus', 'onBlur', 'withFocusRef']);

      var _state = this.state,
          focus = _state.focus,
          wrappedRef = _state.wrappedRef;

      return _react2.default.createElement(WrappedComponent, _extends({
        ref: wrappedRef,
        focus: focus
      }, rest, {
        onFocus: function onFocus(event) {
          _this2.setFocus();
          if (_onFocus) {
            _onFocus(event);
          }
        },
        onBlur: function onBlur(event) {
          _this2.resetFocus();
          if (_onBlur) {
            _onBlur(event);
          }
        }
      }));
    };

    return FocusableComponent;
  }(_react.Component);

  var ForwardRef = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(FocusableComponent, _extends({}, props, { withFocusRef: ref }));
  });

  ForwardRef.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;

  return ForwardRef;
};

exports.withFocus = withFocus;
var withTheme = function withTheme(WrappedComponent) {
  var ThemedComponent = function (_Component2) {
    _inherits(ThemedComponent, _Component2);

    function ThemedComponent() {
      _classCallCheck(this, ThemedComponent);

      return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    ThemedComponent.prototype.render = function render() {
      var _props2 = this.props,
          withThemeRef = _props2.withThemeRef,
          theme = _props2.theme,
          rest = _objectWithoutProperties(_props2, ['withThemeRef', 'theme']);

      return _react2.default.createElement(WrappedComponent, _extends({
        ref: withThemeRef
      }, rest, {
        theme: theme
      }));
    };

    return ThemedComponent;
  }(_react.Component);

  var ForwardRef = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(
      _contexts2.ThemeContext.Consumer,
      null,
      function (theme) {
        return _react2.default.createElement(ThemedComponent, _extends({}, props, { theme: theme, withThemeRef: ref }));
      }
    );
  });

  ForwardRef.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;

  return ForwardRef;
};

exports.withTheme = withTheme;
var withForwardRef = exports.withForwardRef = function withForwardRef(WrappedComponent) {
  var ForwardRefComponent = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(WrappedComponent, _extends({ forwardRef: ref }, props));
  });

  ForwardRefComponent.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  ForwardRefComponent.name = ForwardRefComponent.displayName;

  return ForwardRefComponent;
};

var withAnnounce = exports.withAnnounce = function withAnnounce(WrappedComponent) {
  var ForwardRef = _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(
      _contexts2.AnnounceContext.Consumer,
      null,
      function (announce) {
        return _react2.default.createElement(WrappedComponent, _extends({}, props, { announce: announce, ref: ref }));
      }
    );
  });

  ForwardRef.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;

  return ForwardRef;
};

var withIconTheme = exports.withIconTheme = function withIconTheme(WrappedComponent) {
  var IconThemeComponent = function IconThemeComponent(props) {
    return _react2.default.createElement(
      _contexts.ThemeContext.Consumer,
      null,
      function (iconTheme) {
        return _react2.default.createElement(WrappedComponent, _extends({}, props, { iconTheme: iconTheme }));
      }
    );
  };

  IconThemeComponent.displayName = (0, _getDisplayName2.default)(WrappedComponent);

  return IconThemeComponent;
};