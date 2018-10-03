'use strict';

exports.__esModule = true;
exports.Tabs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.activateTab = function (index) {
      var _this$props = _this.props,
          activeIndex = _this$props.activeIndex,
          onActive = _this$props.onActive;

      if (activeIndex === undefined) {
        _this.setState({ activeIndex: index });
      }
      if (onActive) {
        onActive(index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndex = prevState.activeIndex;

    if (stateActiveIndex !== activeIndex && activeIndex !== undefined) {
      return { activeIndex: activeIndex };
    }
    return { activeIndex: stateActiveIndex || 0 };
  };

  Tabs.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        justify = _props.justify,
        tabContents = _props.messages.tabContents,
        rest = _objectWithoutProperties(_props, ['children', 'justify', 'messages']);

    delete rest.activeIndex;
    delete rest.onActive;
    var activeIndex = this.state.activeIndex;


    var activeContent = void 0;
    var activeTitle = void 0;
    var tabs = _react.Children.map(children, function (tab, index) {
      if (!tab) return undefined;

      var tabProps = tab.props || {};

      var isTabActive = index === activeIndex;

      if (isTabActive) {
        activeContent = tabProps.children;
        activeTitle = tabProps.title;
      }

      return (0, _react.cloneElement)(tab, {
        active: isTabActive,
        onActivate: function onActivate() {
          return _this2.activateTab(index);
        }
      });
    }, this);

    var tabContentTitle = (activeTitle || '') + ' ' + tabContents;

    return _react2.default.createElement(
      'div',
      { role: 'tablist' },
      _react2.default.createElement(
        _Box.Box,
        _extends({
          direction: 'row',
          justify: justify
        }, rest),
        tabs
      ),
      _react2.default.createElement(
        'div',
        { 'aria-label': tabContentTitle, role: 'tabpanel' },
        activeContent
      )
    );
  };

  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  justify: 'center',
  messages: {
    tabContents: 'Tab Contents'
  },
  responsive: true
};


var TabsDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  TabsDoc = require('./doc').doc(Tabs); // eslint-disable-line global-require
}
var TabsWrapper = TabsDoc || Tabs;

exports.Tabs = TabsWrapper;