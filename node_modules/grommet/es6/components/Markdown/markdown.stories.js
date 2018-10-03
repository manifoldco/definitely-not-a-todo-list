function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, Markdown } from '../';
import { grommet } from '../../themes';

var CONTENT = '\n  # Out of Breath\n\n  You know, sometimes in life it seems like there\'s no way out. Like\n  a sheep trapped in a maze designed by wolves.\n\n  [reference](#)\n';

var SimpleMarkdown = function (_Component) {
  _inherits(SimpleMarkdown, _Component);

  function SimpleMarkdown() {
    _classCallCheck(this, SimpleMarkdown);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleMarkdown.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Markdown,
        null,
        CONTENT
      )
    );
  };

  return SimpleMarkdown;
}(Component);

storiesOf('Markdown', module).add('Simple Markdown', function () {
  return React.createElement(SimpleMarkdown, null);
});