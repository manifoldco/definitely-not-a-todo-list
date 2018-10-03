'use strict';

exports.__esModule = true;
exports.Distribution = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box');

var _hocs = require('../hocs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function Value(_ref) {
  var basis = _ref.basis,
      children = _ref.children;
  return _react2.default.createElement(
    _Box.Box,
    { basis: basis, flex: 'shrink', overflow: 'hidden' },
    children
  );
};

var Distribution = function (_Component) {
  _inherits(Distribution, _Component);

  function Distribution() {
    _classCallCheck(this, Distribution);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Distribution.prototype.render = function render() {
    var _props = this.props,
        basis = _props.basis,
        children = _props.children,
        direction = _props.direction,
        gap = _props.gap,
        theme = _props.theme,
        values = _props.values,
        rest = _objectWithoutProperties(_props, ['basis', 'children', 'direction', 'gap', 'theme', 'values']);

    if (values.length === 1) {
      var value = values[0];
      return _react2.default.createElement(
        Value,
        { value: value, basis: basis },
        children(value)
      );
    } else if (values.length > 1) {
      // calculate total
      var total = 0;
      values.forEach(function (v) {
        total += v.value;
      });

      // figure out how many of the values area needed to represent half of the total
      var subTotal = 0;
      var subIndex = void 0;
      values.some(function (v, index) {
        subTotal += v.value;
        if (subTotal >= total * 0.4) {
          subIndex = index + 1;
          return true;
        }
        return false;
      });

      if (subIndex === values.length) {
        var _value = values[0];
        return _react2.default.createElement(
          Value,
          { value: _value, basis: basis },
          children(_value)
        );
      }

      var childBasis = void 0;
      if (subTotal > total * 0.7) {
        childBasis = ['3/4', '1/4'];
      } else if (subTotal > total * 0.6) {
        childBasis = ['2/3', '1/3'];
      } else {
        childBasis = ['1/2', '1/2'];
      }

      return _react2.default.createElement(
        _Box.Box,
        _extends({
          direction: direction,
          basis: basis,
          flex: basis ? 'shrink' : true,
          overflow: 'hidden',
          gap: gap
        }, rest),
        _react2.default.createElement(
          Distribution,
          {
            values: values.slice(0, subIndex),
            basis: childBasis[0],
            direction: direction === 'row' ? 'column' : 'row',
            gap: gap
          },
          children
        ),
        _react2.default.createElement(
          Distribution,
          {
            values: values.slice(subIndex),
            basis: childBasis[1],
            direction: direction === 'row' ? 'column' : 'row',
            gap: gap
          },
          children
        )
      );
    }
    return null;
  };

  return Distribution;
}(_react.Component);

Distribution.defaultProps = {
  direction: 'row',
  gap: 'xsmall'
};


var DistributionDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  DistributionDoc = require('./doc').doc(Distribution); // eslint-disable-line global-require
}
var DistributionWrapper = (0, _recompose.compose)(_hocs.withTheme)(DistributionDoc || Distribution);

exports.Distribution = DistributionWrapper;