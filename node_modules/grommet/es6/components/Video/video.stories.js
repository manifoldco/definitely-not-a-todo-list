function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Video } from '../';
import { grommet } from '../../themes';

var SimpleVideo = function (_Component) {
  _inherits(SimpleVideo, _Component);

  function SimpleVideo() {
    _classCallCheck(this, SimpleVideo);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleVideo.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Video,
        null,
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.webm', type: 'video/webm' }),
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.ogv', type: 'video/ogg' }),
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.mp4', type: 'video/mp4' }),
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.3gp', type: 'video/3gp' })
      )
    );
  };

  return SimpleVideo;
}(Component);

storiesOf('Video', module).add('Simple Video', function () {
  return React.createElement(SimpleVideo, null);
});