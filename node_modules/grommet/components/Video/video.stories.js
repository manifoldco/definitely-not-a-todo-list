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

var SimpleVideo = function (_Component) {
  _inherits(SimpleVideo, _Component);

  function SimpleVideo() {
    _classCallCheck(this, SimpleVideo);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleVideo.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Video,
        null,
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.webm', type: 'video/webm' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.ogv', type: 'video/ogg' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.mp4', type: 'video/mp4' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.3gp', type: 'video/3gp' })
      )
    );
  };

  return SimpleVideo;
}(_react.Component);

(0, _react3.storiesOf)('Video', module).add('Simple Video', function () {
  return _react2.default.createElement(SimpleVideo, null);
});