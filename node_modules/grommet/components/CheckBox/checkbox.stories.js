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

var SimpleCheckBox = function (_Component) {
  _inherits(SimpleCheckBox, _Component);

  function SimpleCheckBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleCheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { checked: false }, _this.onChange = function (event) {
      return _this.setState({ checked: event.target.checked });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleCheckBox.prototype.render = function render() {
    var checked = this.state.checked;

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.CheckBox, _extends({}, this.props, {
        label: 'Choice',
        checked: checked,
        onChange: this.onChange
      }))
    );
  };

  return SimpleCheckBox;
}(_react.Component);

(0, _react3.storiesOf)('CheckBox', module).add('Simple', function () {
  return _react2.default.createElement(SimpleCheckBox, null);
}).add('Toggle', function () {
  return _react2.default.createElement(SimpleCheckBox, { toggle: true });
});