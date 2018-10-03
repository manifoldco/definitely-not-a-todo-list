var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';
import Markdown from 'markdown-to-jsx';

import { deepMerge } from '../../utils';

import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { withTheme } from '../hocs';

var GrommetMarkdown = function (_Component) {
  _inherits(GrommetMarkdown, _Component);

  function GrommetMarkdown() {
    _classCallCheck(this, GrommetMarkdown);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  GrommetMarkdown.prototype.render = function render() {
    var _props = this.props,
        components = _props.components,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['components', 'theme']);

    var heading = [1, 2, 3, 4].reduce(function (obj, level) {
      var result = _extends({}, obj);
      result['h' + level] = {
        component: Heading,
        props: { level: level }
      };
      return result;
    }, {});

    var overrides = deepMerge({
      p: { component: Paragraph }
    }, heading, components);

    return React.createElement(Markdown, _extends({ options: { overrides: overrides } }, rest));
  };

  return GrommetMarkdown;
}(Component);

var GrommetMarkdownDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  GrommetMarkdownDoc = require('./doc').doc(GrommetMarkdown); // eslint-disable-line global-require
}
var GrommetMarkdownWrapper = compose(withTheme)(GrommetMarkdownDoc || GrommetMarkdown);

export { GrommetMarkdownWrapper as Markdown };