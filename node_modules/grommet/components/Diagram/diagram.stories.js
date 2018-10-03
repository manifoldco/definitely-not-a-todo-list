'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Node = function Node(_ref) {
  var id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(_.Box, _extends({
    id: id,
    basis: 'xxsmall',
    margin: 'small',
    pad: 'medium',
    round: 'small',
    background: 'neutral-1'
  }, rest));
};

var connection = function connection(fromTarget, toTarget) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var color = _ref2.color,
      rest = _objectWithoutProperties(_ref2, ['color']);

  return _extends({
    fromTarget: fromTarget,
    toTarget: toTarget,
    anchor: 'vertical',
    color: color || 'accent-1',
    thickness: 'xsmall',
    round: true,
    type: 'rectilinear'
  }, rest);
};

var SimpleDiagram = function (_Component) {
  _inherits(SimpleDiagram, _Component);

  function SimpleDiagram() {
    _classCallCheck(this, SimpleDiagram);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleDiagram.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Stack,
        null,
        _react2.default.createElement(
          _.Box,
          null,
          _react2.default.createElement(
            _.Box,
            { direction: 'row' },
            [1, 2, 3].map(function (id) {
              return _react2.default.createElement(Node, { key: id, id: id });
            })
          ),
          _react2.default.createElement(
            _.Box,
            { direction: 'row' },
            [4, 5].map(function (id) {
              return _react2.default.createElement(Node, { key: id, id: id, background: 'neutral-2' });
            })
          )
        ),
        _react2.default.createElement(_.Diagram, {
          connections: [connection('1', '5', { color: 'accent-2' }), connection('3', '5', { color: 'accent-2', anchor: 'horizontal' })]
        })
      )
    );
  };

  return SimpleDiagram;
}(_react.Component);

(0, _react3.storiesOf)('Diagram', module).add('Simple Diagram', function () {
  return _react2.default.createElement(SimpleDiagram, null);
});