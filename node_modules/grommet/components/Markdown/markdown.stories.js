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

var CONTENT = '\n  # Out of Breath\n\n  You know, sometimes in life it seems like there\'s no way out. Like\n  a sheep trapped in a maze designed by wolves.\n\n  [reference](#)\n';

var SimpleMarkdown = function (_Component) {
  _inherits(SimpleMarkdown, _Component);

  function SimpleMarkdown() {
    _classCallCheck(this, SimpleMarkdown);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleMarkdown.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Markdown,
        null,
        CONTENT
      )
    );
  };

  return SimpleMarkdown;
}(_react.Component);

(0, _react3.storiesOf)('Markdown', module).add('Simple Markdown', function () {
  return _react2.default.createElement(SimpleMarkdown, null);
});