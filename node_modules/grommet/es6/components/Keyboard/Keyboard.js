function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Children, Component, cloneElement } from 'react';

var KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift'
};

var Keyboard = function (_Component) {
  _inherits(Keyboard, _Component);

  function Keyboard() {
    var _temp, _this, _ret;

    _classCallCheck(this, Keyboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      var onKeyDown = _this.props.onKeyDown;

      var key = event.keyCode ? event.keyCode : event.which;
      var callbackName = KEYS[key];
      if (callbackName && _this.props[callbackName]) {
        var _this$props;

        (_this$props = _this.props)[callbackName].apply(_this$props, [event].concat(rest));
      }
      if (onKeyDown) {
        onKeyDown.apply(undefined, [event].concat(rest));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Keyboard.prototype.componentDidMount = function componentDidMount() {
    var target = this.props.target;

    if (target === 'document') {
      document.addEventListener('keydown', this.onKeyDown);
    }
  };

  Keyboard.prototype.componentWillUnmount = function componentWillUnmount() {
    var target = this.props.target;

    if (target === 'document') {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  };

  Keyboard.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        target = _props.target;


    return target === 'document' ? children : cloneElement(Children.only(children), {
      onKeyDown: this.onKeyDown
    });
  };

  return Keyboard;
}(Component);

var KeyboardDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  KeyboardDoc = require('./doc').doc(Keyboard); // eslint-disable-line global-require
}
var KeyboardWrapper = KeyboardDoc || Keyboard;

export { KeyboardWrapper as Keyboard };