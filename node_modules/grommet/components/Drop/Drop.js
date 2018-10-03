'use strict';

exports.__esModule = true;
exports.Drop = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _utils = require('../../utils');

var _hocs = require('../hocs');

var _DropContainer = require('./DropContainer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drop = function (_Component) {
  _inherits(Drop, _Component);

  function Drop() {
    var _temp, _this, _ret;

    _classCallCheck(this, Drop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.originalFocusedElement = document.activeElement, _this.dropContainer = (0, _utils.getNewContainer)(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Drop.prototype.componentWillUnmount = function componentWillUnmount() {
    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        (0, _utils.setFocusWithoutScroll)(this.originalFocusedElement);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        (0, _utils.setFocusWithoutScroll)(this.originalFocusedElement.parentNode);
      }
    }
    document.body.removeChild(this.dropContainer);
  };

  Drop.prototype.render = function render() {
    var _props = this.props,
        dropTarget = _props.target,
        rest = _objectWithoutProperties(_props, ['target']);

    return (0, _reactDom.createPortal)(_react2.default.createElement(_DropContainer.DropContainer, _extends({ dropTarget: dropTarget }, rest)), this.dropContainer);
  };

  return Drop;
}(_react.Component);

Drop.defaultProps = {
  align: {
    top: 'top',
    left: 'left'
  }
};


var DropDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  DropDoc = require('./doc').doc(Drop); // eslint-disable-line global-require
}
var DropWrapper = (0, _recompose.compose)(_hocs.withTheme)(DropDoc || Drop);

exports.Drop = DropWrapper;