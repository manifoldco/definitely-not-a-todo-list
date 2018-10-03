'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleButton = function SimpleButton(props) {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_.Button, _extends({ fill: true, label: 'Submit', onClick: function onClick() {} }, props))
  );
};

var IconButton = function IconButton() {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_.Button, { icon: _react2.default.createElement(_grommetIcons.Add, null), hoverIndicator: true, onClick: function onClick() {} })
  );
};

var PlainButton = function PlainButton(props) {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(
      _.Button,
      _extends({ hoverIndicator: true, onClick: function onClick() {} }, props),
      _react2.default.createElement(
        _.Box,
        { pad: 'small', direction: 'row', align: 'center', gap: 'small' },
        _react2.default.createElement(_grommetIcons.Add, null),
        _react2.default.createElement(
          _.Text,
          null,
          'Add'
        )
      )
    )
  );
};

var AnchorButton = function AnchorButton() {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_.Button, { label: 'Go', href: '#' })
  );
};

var RouteButton = function RouteButton() {
  return _react2.default.createElement(
    _.Grommet,
    { theme: _themes.grommet },
    _react2.default.createElement(_.RoutedButton, { label: 'Go', path: '/' })
  );
};

var customTheme = {
  global: {
    font: {
      family: 'Arial'
    }
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3'
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    primary: {
      color: '#2196f3'
    },
    extend: function extend(props) {
      var extraStyles = '';
      if (props.primary) {
        extraStyles = '\n          text-transform: uppercase;\n        ';
      }
      return '\n        color: white;\n\n        span {\n          font-size: 12px;\n        }\n\n        ' + extraStyles + '\n      ';
    }
  }
};

var CustomThemeButton = function CustomThemeButton() {
  return _react2.default.createElement(
    _.Grommet,
    { theme: customTheme },
    _react2.default.createElement(_.Button, { label: 'Submit', onClick: function onClick() {}, primary: true })
  );
};

(0, _react3.storiesOf)('Button', module).add('Default', function () {
  return _react2.default.createElement(SimpleButton, null);
}).add('Primary', function () {
  return _react2.default.createElement(SimpleButton, { primary: true });
}).add('Icon', function () {
  return _react2.default.createElement(IconButton, null);
}).add('Plain', function () {
  return _react2.default.createElement(PlainButton, null);
}).add('Anchor', function () {
  return _react2.default.createElement(AnchorButton, null);
}).add('RoutedButton', function () {
  return _react2.default.createElement(RouteButton, null);
}).add('Active', function () {
  return _react2.default.createElement(PlainButton, { active: true });
}).add('Custom theme', function () {
  return _react2.default.createElement(CustomThemeButton, null);
});