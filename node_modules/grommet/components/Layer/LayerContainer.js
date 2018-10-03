'use strict';

exports.__esModule = true;
exports.LayerContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _contexts = require('grommet-icons/contexts');

var _FocusedContainer = require('../FocusedContainer');

var _Keyboard = require('../Keyboard');

var _hocs = require('../hocs');

var _utils = require('../../utils');

var _StyledLayer = require('./StyledLayer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, LayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.containerRef = _react2.default.createRef(), _this.layerRef = _react2.default.createRef(), _this.makeLayerVisible = function () {
      var node = (0, _reactDom.findDOMNode)(_this.layerRef.current || _this.containerRef.current);
      if (node && node.scrollIntoView) {
        node.scrollIntoView();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LayerContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var theme = nextProps.theme;
    var stateTheme = prevState.theme;
    // set dark context based on layer background, not Layer's container.

    var dark = theme.dark;
    if (theme.layer.background) {
      dark = (0, _utils.backgroundIsDark)(theme.layer.background, theme);
    }
    if (!dark !== !theme.dark) {
      if (!stateTheme || dark !== stateTheme.dark) {
        return {
          theme: _extends({}, theme, {
            dark: dark,
            icon: dark ? theme.iconThemes.dark : theme.iconThemes.light
          })
        };
      }
    } else if (stateTheme) {
      return { theme: undefined };
    }
    return null;
  };

  LayerContainer.prototype.componentDidMount = function componentDidMount() {
    var position = this.props.position;

    if (position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  LayerContainer.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var position = this.props.position;

    if (prevProps.position !== position && position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  LayerContainer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        id = _props.id,
        modal = _props.modal,
        onClickOutside = _props.onClickOutside,
        onEsc = _props.onEsc,
        plain = _props.plain,
        position = _props.position,
        responsive = _props.responsive,
        propsTheme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'id', 'modal', 'onClickOutside', 'onEsc', 'plain', 'position', 'responsive', 'theme']);

    var stateTheme = this.state.theme;

    var theme = stateTheme || propsTheme;

    var content = _react2.default.createElement(
      _StyledLayer.StyledContainer,
      _extends({
        id: id
      }, rest, {
        theme: theme,
        position: position,
        plain: plain,
        responsive: responsive,
        ref: this.containerRef
      }),
      children
    );

    if (modal) {
      content = _react2.default.createElement(
        _StyledLayer.StyledLayer,
        {
          id: id,
          plain: plain,
          position: position,
          theme: theme,
          responsive: responsive,
          tabIndex: '-1',
          ref: this.layerRef
        },
        _react2.default.createElement(_StyledLayer.StyledOverlay, { onClick: onClickOutside, theme: theme }),
        content
      );
    }

    if (onEsc) {
      content = _react2.default.createElement(
        _Keyboard.Keyboard,
        { target: 'document', onEsc: onEsc },
        content
      );
    }

    if (modal) {
      content = _react2.default.createElement(
        _FocusedContainer.FocusedContainer,
        { hidden: position === 'hidden', restrictScroll: true },
        _react2.default.createElement(
          _contexts.ThemeContext.Provider,
          { value: theme.icon },
          content
        )
      );
    }

    return content;
  };

  return LayerContainer;
}(_react.Component);

LayerContainer.defaultProps = {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center'
};


var LayerContainerWrapper = (0, _hocs.withTheme)(LayerContainer);

exports.LayerContainer = LayerContainerWrapper;