'use strict';

exports.__esModule = true;
exports.RadioButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _object = require('../../utils/object');

var _StyledRadioButton = require('./StyledRadioButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_Component) {
  _inherits(RadioButton, _Component);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RadioButton.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        forwardRef = _props.forwardRef,
        id = _props.id,
        label = _props.label,
        name = _props.name,
        onChange = _props.onChange,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['checked', 'disabled', 'forwardRef', 'id', 'label', 'name', 'onChange', 'theme']);

    var normalizedLabel = typeof label === 'string' ? _react2.default.createElement(
      'div',
      null,
      label
    ) : label;

    return _react2.default.createElement(
      _StyledRadioButton.StyledRadioButtonContainer,
      _extends({}, (0, _object.removeUndefined)({ htmlFor: id, disabled: disabled }), {
        theme: theme
      }),
      _react2.default.createElement(
        _StyledRadioButton.StyledRadioButton,
        { theme: theme },
        _react2.default.createElement(_StyledRadioButton.StyledRadioButtonInput, _extends({}, rest, {
          ref: forwardRef,
          type: 'radio'
        }, (0, _object.removeUndefined)({ id: id, name: name, checked: checked, disabled: disabled, onChange: onChange }), {
          theme: theme
        })),
        _react2.default.createElement(
          _StyledRadioButton.StyledRadioButtonButton,
          { theme: theme },
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet' },
            _react2.default.createElement('circle', { cx: 12, cy: 12, r: 6 })
          )
        )
      ),
      normalizedLabel
    );
  };

  return RadioButton;
}(_react.Component);

var RadioButtonDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  RadioButtonDoc = require('./doc').doc(RadioButton); // eslint-disable-line global-require
}
var RadioButtonWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(RadioButtonDoc || RadioButton);

exports.RadioButton = RadioButtonWrapper;