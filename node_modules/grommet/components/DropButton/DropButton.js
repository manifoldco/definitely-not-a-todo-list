'use strict';

exports.__esModule = true;
exports.DropButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Button = require('../Button');

var _Drop = require('../Drop');

var _hocs = require('../hocs');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropButton = function (_Component) {
  _inherits(DropButton, _Component);

  function DropButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, DropButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      buttonRef: _react2.default.createRef()
    }, _this.onDropClose = function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          open = _this$props.open;

      _this.setState({ show: open || false }, function () {
        if (onClose) {
          onClose();
        }
      });
    }, _this.onToggle = function () {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          onOpen = _this$props2.onOpen;
      var show = _this.state.show;

      _this.setState({ show: !show }, show ? onClose && onClose() : onOpen && onOpen());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DropButton.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef,
        open = nextProps.open;
    var buttonRef = prevState.buttonRef,
        show = prevState.show;

    var nextButtonRef = forwardRef || buttonRef;
    var reRenderOnMount = show === undefined && open;
    if (open !== undefined && open !== show) {
      return { show: open, reRenderOnMount: reRenderOnMount, buttonRef: nextButtonRef };
    }
    if (nextButtonRef !== buttonRef) {
      return { buttonRef: nextButtonRef };
    }
    return null;
  };

  DropButton.prototype.componentDidMount = function componentDidMount() {
    var _state = this.state,
        buttonRef = _state.buttonRef,
        reRenderOnMount = _state.reRenderOnMount;
    // In case the caller starts with the drop open, before we have the
    // buttonRef, see if we have it now and re-render.

    if (reRenderOnMount && buttonRef.current) {
      this.setState({ reRenderOnMount: false }); // eslint-disable-line
    }
  };

  DropButton.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!this.state.show && prevState.show) {
      // focus on the button if the drop is closed
      (0, _utils.setFocusWithoutScroll)(this.state.buttonRef.current);
    }
  };

  DropButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        disabled = _props.disabled,
        dropAlign = _props.dropAlign,
        forwardRef = _props.forwardRef,
        dropContent = _props.dropContent,
        dropTarget = _props.dropTarget,
        id = _props.id,
        open = _props.open,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['disabled', 'dropAlign', 'forwardRef', 'dropContent', 'dropTarget', 'id', 'open', 'theme']);

    var _state2 = this.state,
        buttonRef = _state2.buttonRef,
        show = _state2.show;


    delete rest.onClose;
    delete rest.onOpen;

    var drop = void 0;
    if (show && buttonRef.current) {
      drop = _react2.default.createElement(
        _Drop.Drop,
        {
          id: id ? id + '__drop' : undefined,
          restrictFocus: true,
          align: dropAlign,
          target: dropTarget || buttonRef.current,
          onClickOutside: this.onDropClose,
          onEsc: function onEsc(event) {
            // prevents layer to close on esc
            event.stopPropagation();
            event.nativeEvent.stopImmediatePropagation();
            _this2.onDropClose();
          }
        },
        dropContent
      );
    }

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_Button.Button, _extends({
        id: id,
        ref: buttonRef,
        onClick: disabled ? undefined : this.onToggle
      }, rest)),
      drop
    );
  };

  return DropButton;
}(_react.Component);

DropButton.defaultProps = {
  a11yTitle: 'Open Drop',
  dropAlign: { top: 'top', left: 'left' }
};


var DropButtonDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  DropButtonDoc = require('./doc').doc(DropButton); // eslint-disable-line global-require
}
var DropButtonWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(DropButtonDoc || DropButton);

exports.DropButton = DropButtonWrapper;