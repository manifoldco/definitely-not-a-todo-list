'use strict';

exports.__esModule = true;
exports.InfiniteScroll = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactWaypoint = require('react-waypoint');

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll() {
    var _temp, _this, _ret;

    _classCallCheck(this, InfiniteScroll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.showRef = _react2.default.createRef(), _this.initialScroll = false, _this.increaseOffset = function () {
      var _this$props = _this.props,
          items = _this$props.items,
          onMore = _this$props.onMore,
          step = _this$props.step;
      var count = _this.state.count;

      _this.setState({ count: count + 1 },
      // call onMore if we've reached the end of the items
      function () {
        return onMore && (count + 1) * step >= items.length && onMore();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  InfiniteScroll.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var show = nextProps.show,
        step = nextProps.step;

    if (!prevState.count || show && show < step * prevState.count) {
      var count = prevState.count || 1;
      if (show && show > step * count) {
        count = (show + step) / step;
      }
      return { count: count };
    }
    return null;
  };

  InfiniteScroll.prototype.componentDidMount = function componentDidMount() {
    this.scrollShow();
  };

  InfiniteScroll.prototype.componentDidUpdate = function componentDidUpdate() {
    this.scrollShow();
  };

  InfiniteScroll.prototype.scrollShow = function scrollShow() {
    var show = this.props.show;

    if (show && !this.initialScroll && this.showRef.current) {
      this.initialScroll = true;
      // on initial render, scroll to any 'show'
      var element = (0, _reactDom.findDOMNode)(this.showRef.current);
      element.scrollIntoView();
    }
  };

  InfiniteScroll.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        items = _props.items,
        renderMarker = _props.renderMarker,
        scrollableAncestor = _props.scrollableAncestor,
        show = _props.show,
        step = _props.step;
    var count = this.state.count;

    var displayCount = step * count;
    var waypointAt = displayCount - step / 2;

    var marker = _react2.default.createElement(_reactWaypoint2.default, {
      key: 'marker',
      onEnter: this.increaseOffset,
      bottomOffsetX: '-96px',
      scrollableAncestor: scrollableAncestor
    });
    if (renderMarker) {
      // need to give it a key
      marker = _react2.default.cloneElement(renderMarker(marker), { key: 'marker' });
    }

    return items.slice(0, displayCount).map(function (item, index) {
      var child = children(item, index);
      if (show && show === index) {
        child = _react2.default.cloneElement(child, { key: 'show', ref: _this2.showRef });
      }
      if (index === waypointAt) {
        return [child, marker];
      }
      return child;
    });
  };

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.defaultProps = {
  items: [],
  step: 50
};


var InfiniteScrollDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  InfiniteScrollDoc = require('./doc').doc(InfiniteScroll); // eslint-disable-line global-require
}
var InfiniteScrollWrapper = InfiniteScrollDoc || InfiniteScroll;

exports.InfiniteScroll = InfiniteScrollWrapper;