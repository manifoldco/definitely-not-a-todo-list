'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'];

var All = function (_Component) {
  _inherits(All, _Component);

  function All() {
    _classCallCheck(this, All);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  All.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      sizes.map(function (size) {
        return _react2.default.createElement(
          _.Box,
          { key: size, margin: 'small' },
          _react2.default.createElement(
            _.Text,
            { size: size },
            'Text ' + size
          )
        );
      })
    );
  };

  return All;
}(_react.Component);

var Color = function (_Component2) {
  _inherits(Color, _Component2);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Color.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Text,
        { color: 'accent-1' },
        'Colored Text'
      )
    );
  };

  return Color;
}(_react.Component);

(0, _react3.storiesOf)('Text', module).add('All', function () {
  return _react2.default.createElement(All, null);
}).add('Color', function () {
  return _react2.default.createElement(Color, null);
});