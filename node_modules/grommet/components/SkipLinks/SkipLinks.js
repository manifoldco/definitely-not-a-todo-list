'use strict';

exports.__esModule = true;
exports.SkipLinks = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Box = require('../Box');

var _Heading = require('../Heading');

var _Layer = require('../Layer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkipLinks = function (_Component) {
  _inherits(SkipLinks, _Component);

  function SkipLinks() {
    var _temp, _this, _ret;

    _classCallCheck(this, SkipLinks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      showLayer: false
    }, _this.onBlur = function () {
      // timeout needed so it gives enough time for activeElement to be updated
      setTimeout(function () {
        var layerNode = (0, _reactDom.findDOMNode)(_this.layerRef);
        if (!layerNode.contains(document.activeElement)) {
          _this.removeLayer();
        }
      }, 0);
    }, _this.onFocus = function () {
      _this.setState({ showLayer: true });
    }, _this.removeLayer = function () {
      _this.setState({ showLayer: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SkipLinks.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        id = _props.id,
        messages = _props.messages;
    var showLayer = this.state.showLayer;

    return _react2.default.createElement(
      _Layer.Layer,
      {
        id: id,
        position: showLayer ? 'top' : 'hidden',
        ref: function ref(_ref) {
          _this2.layerRef = _ref;
        },
        onFocus: this.onFocus,
        onBlur: this.onBlur
      },
      _react2.default.createElement(
        _Box.Box,
        { pad: { horizontal: 'medium' } },
        _react2.default.createElement(
          _Heading.Heading,
          { level: 2 },
          messages.skipTo,
          ':'
        ),
        _react2.default.createElement(
          _Box.Box,
          { direction: 'row', align: 'center', pad: { bottom: 'medium' } },
          children.map(function (element, index) {
            return (0, _react.cloneElement)(element, {
              key: 'skip-link-' + index,
              onClick: _this2.removeLayer
            });
          })
        )
      )
    );
  };

  return SkipLinks;
}(_react.Component);

SkipLinks.defaultProps = {
  messages: {
    skipTo: 'Skip To'
  }
};


var SkipLinksDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  SkipLinksDoc = require('./doc').doc(SkipLinks); // eslint-disable-line global-require
}
var SkipLinksWrapper = SkipLinksDoc || SkipLinks;

exports.SkipLinks = SkipLinksWrapper;