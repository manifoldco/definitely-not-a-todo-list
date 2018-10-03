'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Anchor', module).add('Default', function () {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _.Anchor,
      { href: '#' },
      'Link'
    )
  );
}).add('Icon', function () {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_.Anchor, { icon: _react2.default.createElement(_grommetIcons.Add, null), label: 'Add', href: '#' })
  );
}).add('With Text', function () {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    'This is a ',
    _react2.default.createElement(_.Anchor, { label: 'link', href: '#' }),
    ' with text.'
  );
});