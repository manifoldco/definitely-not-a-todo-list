'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _ = require('../');

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleBox = function (_Component) {
  _inherits(SimpleBox, _Component);

  function SimpleBox() {
    _classCallCheck(this, SimpleBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        {
          direction: 'row-responsive',
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: 'dark-2'
        },
        _react2.default.createElement(
          _.Box,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'light-2', opacity: 'strong' }
          },
          _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' }),
          _react2.default.createElement(
            _.Text,
            null,
            'Party'
          ),
          _react2.default.createElement(_.Anchor, { href: '', label: 'Link' }),
          _react2.default.createElement(_.Button, { label: 'Button', onClick: function onClick() {} })
        ),
        _react2.default.createElement(
          _.Box,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'accent-2', opacity: 'weak' }
          },
          _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' }),
          _react2.default.createElement(
            _.Text,
            null,
            'Nature'
          ),
          _react2.default.createElement(_.Anchor, { href: '', label: 'Link' }),
          _react2.default.createElement(_.Button, { label: 'Button', onClick: function onClick() {} })
        ),
        _react2.default.createElement(
          _.Box,
          { pad: 'xlarge', align: 'center', background: 'dark-3' },
          _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge', color: 'light-2' }),
          _react2.default.createElement(
            _.Text,
            null,
            'Travel'
          ),
          _react2.default.createElement(_.Anchor, { href: '', label: 'Link' }),
          _react2.default.createElement(_.Button, { label: 'Button', onClick: function onClick() {} })
        )
      )
    );
  };

  return SimpleBox;
}(_react.Component);

var customColorBox = {
  global: {
    colors: {
      'brand-gradient': 'linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)'
    },
    font: {
      family: 'Arial'
    }
  }
};

var CustomColorBox = function (_Component2) {
  _inherits(CustomColorBox, _Component2);

  function CustomColorBox() {
    _classCallCheck(this, CustomColorBox);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CustomColorBox.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: customColorBox },
      _react2.default.createElement(
        _.Box,
        {
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: { color: 'brand-gradient', dark: true },
          round: 'large'
        },
        _react2.default.createElement(
          _.Text,
          null,
          'I have a linear gradient background'
        )
      )
    );
  };

  return CustomColorBox;
}(_react.Component);

(0, _react3.storiesOf)('Box', module).add('Simple Box', function () {
  return _react2.default.createElement(SimpleBox, null);
}).add('Custom color', function () {
  return _react2.default.createElement(CustomColorBox, null);
});