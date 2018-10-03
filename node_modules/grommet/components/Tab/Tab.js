'use strict';

exports.__esModule = true;
exports.Tab = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box');

var _Button = require('../Button');

var _Text = require('../Text');

var _hocs = require('../hocs');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onMouseOver = function (event) {
      var onMouseOver = _this.props.onMouseOver;

      _this.setState({ over: true });
      if (onMouseOver) {
        onMouseOver(event);
      }
    }, _this.onMouseOut = function (event) {
      var onMouseOut = _this.props.onMouseOut;

      _this.setState({ over: undefined });
      if (onMouseOut) {
        onMouseOut(event);
      }
    }, _this.onClickTab = function (event) {
      var onActivate = _this.props.onActivate;

      if (event) {
        event.preventDefault();
      }
      onActivate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tab.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var active = nextProps.active;
    var over = prevState.over;

    if (active && over) {
      return { over: undefined };
    }
    return null;
  };

  Tab.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        forwardRef = _props.forwardRef,
        title = _props.title,
        onMouseOver = _props.onMouseOver,
        onMouseOut = _props.onMouseOut,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['active', 'forwardRef', 'title', 'onMouseOver', 'onMouseOut', 'theme']);

    var over = this.state.over;


    delete rest.onActivate;

    var normalizedTitle = void 0;
    if (typeof title !== 'string') {
      normalizedTitle = title;
    } else if (active) {
      normalizedTitle = _react2.default.createElement(
        _Text.Text,
        { weight: 'bold' },
        title
      );
    } else {
      var color = (0, _utils.normalizeColor)(theme.global.text.color, theme);
      normalizedTitle = _react2.default.createElement(
        _Text.Text,
        { color: color },
        title
      );
    }

    var borderColor = void 0;
    if (active) {
      borderColor = theme.dark ? 'white' : 'black';
    } else if (over) {
      borderColor = theme.dark ? 'white' : 'black';
    } else {
      borderColor = (0, _utils.evalStyle)((0, _utils.normalizeColor)(theme.global.control.border.color, theme), theme);
    }

    return _react2.default.createElement(
      _Button.Button,
      _extends({
        ref: forwardRef,
        plain: true,
        role: 'tab',
        'aria-selected': active,
        'aria-expanded': active
      }, rest, {
        onClick: this.onClickTab,
        onMouseOver: this.onMouseOver,
        onMouseOut: this.onMouseOut
      }),
      _react2.default.createElement(
        _Box.Box,
        {
          pad: { bottom: 'xsmall' },
          margin: { horizontal: 'small' },
          border: { side: 'bottom', size: 'small', color: borderColor }
        },
        normalizedTitle
      )
    );
  };

  return Tab;
}(_react.Component);

var TabDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TabDoc = require('./doc').doc(Tab); // eslint-disable-line global-require
}
var TabWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(TabDoc || Tab);

exports.Tab = TabWrapper;