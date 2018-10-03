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

var CenterLayer = function (_Component) {
  _inherits(CenterLayer, _Component);

  function CenterLayer() {
    var _temp, _this, _ret;

    _classCallCheck(this, CenterLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onOpen = function () {
      return _this.setState({ open: true });
    }, _this.onClose = function () {
      return _this.setState({ open: undefined });
    }, _this.onOpen2 = function () {
      return _this.setState({ open2: true });
    }, _this.onClose2 = function () {
      return _this.setState({ open2: undefined });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CenterLayer.prototype.render = function render() {
    var _state = this.state,
        open = _state.open,
        open2 = _state.open2;

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Button, {
        icon: _react2.default.createElement(_grommetIcons.Trash, null),
        label: _react2.default.createElement(
          _.Text,
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Remove'
          )
        ),
        onClick: this.onOpen,
        plain: true
      }),
      open && _react2.default.createElement(
        _.Layer,
        {
          position: 'center',
          modal: true,
          onClickOutside: this.onClose,
          onEsc: this.onClose
        },
        _react2.default.createElement(
          _.Box,
          { pad: 'medium', gap: 'small', width: 'medium' },
          _react2.default.createElement(
            _.Heading,
            { level: 3, margin: 'none' },
            'Confirm'
          ),
          _react2.default.createElement(
            _.Text,
            null,
            'Are you sure you want to delete?'
          ),
          _react2.default.createElement(
            _.Box,
            {
              tag: 'footer',
              gap: 'small',
              direction: 'row',
              align: 'center',
              justify: 'end',
              pad: { top: 'medium', bottom: 'small' }
            },
            _react2.default.createElement(_.Button, {
              label: 'Open 2',
              onClick: this.onOpen2,
              color: 'dark-6'
            }),
            _react2.default.createElement(_.Button, {
              label: _react2.default.createElement(
                _.Text,
                { color: 'white' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Delete'
                )
              ),
              onClick: this.onClose,
              primary: true,
              color: 'status-critical'
            })
          )
        )
      ),
      open2 && _react2.default.createElement(
        _.Layer,
        {
          position: 'top',
          modal: true,
          onClickOutside: this.onClose2,
          onEsc: this.onClose2
        },
        _react2.default.createElement(
          _.Box,
          { pad: 'medium', gap: 'small', width: 'medium' },
          _react2.default.createElement(
            _.Heading,
            { level: 3, margin: 'none' },
            'Confirm 2'
          ),
          _react2.default.createElement(
            _.Box,
            {
              tag: 'footer',
              gap: 'small',
              direction: 'row',
              align: 'center',
              justify: 'end',
              pad: { top: 'medium', bottom: 'small' }
            },
            _react2.default.createElement(_.Button, {
              label: 'Close',
              onClick: this.onClose2,
              color: 'dark-6'
            })
          )
        )
      )
    );
  };

  return CenterLayer;
}(_react.Component);

var FormLayer = function (_Component2) {
  _inherits(FormLayer, _Component2);

  function FormLayer() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, FormLayer);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
      fourthOption: 'one',
      open: false
    }, _this2.onOpen = function () {
      return _this2.setState({ open: true });
    }, _this2.onClose = function () {
      return _this2.setState({ open: undefined });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  FormLayer.prototype.render = function render() {
    var _this3 = this;

    var _state2 = this.state,
        open = _state2.open,
        fourthOption = _state2.fourthOption;

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Box,
        { align: 'start' },
        _react2.default.createElement(_.Button, {
          icon: _react2.default.createElement(_grommetIcons.Add, null),
          label: 'Add',
          onClick: this.onOpen
        }),
        open && _react2.default.createElement(
          _.Layer,
          {
            position: 'right',
            full: 'vertical',
            modal: true,
            onClickOutside: this.onClose,
            onEsc: this.onClose
          },
          _react2.default.createElement(
            _.Box,
            {
              tag: 'form',
              fill: 'vertical',
              overflow: 'auto',
              width: 'medium',
              pad: 'medium',
              onSubmit: this.onClose
            },
            _react2.default.createElement(
              _.Box,
              { flex: false, direction: 'row', justify: 'between' },
              _react2.default.createElement(
                _.Heading,
                { level: 2, margin: 'none' },
                'Add'
              ),
              _react2.default.createElement(_.Button, { icon: _react2.default.createElement(_grommetIcons.Close, null), onClick: this.onClose })
            ),
            _react2.default.createElement(
              _.Box,
              { flex: 'grow', overflow: 'auto', pad: { vertical: 'medium' } },
              _react2.default.createElement(
                _.FormField,
                { label: 'First' },
                _react2.default.createElement(_.TextInput, null)
              ),
              _react2.default.createElement(
                _.FormField,
                { label: 'Second' },
                _react2.default.createElement(_.TextInput, null)
              ),
              _react2.default.createElement(
                _.FormField,
                { label: 'Third' },
                _react2.default.createElement(_.TextInput, null)
              ),
              _react2.default.createElement(
                _.FormField,
                { label: 'Fourth' },
                _react2.default.createElement(_.Select, {
                  options: ['one', 'two', 'three'],
                  value: fourthOption,
                  onChange: function onChange(_ref) {
                    var option = _ref.option;
                    return _this3.setState({ fourthOption: option });
                  }
                })
              )
            ),
            _react2.default.createElement(
              _.Box,
              { flex: false, tag: 'footer', align: 'start' },
              _react2.default.createElement(_.Button, {
                type: 'submit',
                label: 'Submit',
                onClick: this.onClose,
                primary: true
              })
            )
          )
        )
      )
    );
  };

  return FormLayer;
}(_react.Component);

var NotificationLayer = function (_Component3) {
  _inherits(NotificationLayer, _Component3);

  function NotificationLayer() {
    var _temp3, _this4, _ret3;

    _classCallCheck(this, NotificationLayer);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this4 = _possibleConstructorReturn(this, _Component3.call.apply(_Component3, [this].concat(args))), _this4), _this4.state = {}, _this4.onOpen = function () {
      return _this4.setState({ open: true });
    }, _this4.onClose = function () {
      return _this4.setState({ open: undefined });
    }, _temp3), _possibleConstructorReturn(_this4, _ret3);
  }

  NotificationLayer.prototype.render = function render() {
    var open = this.state.open;

    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(_.Button, {
        icon: _react2.default.createElement(_grommetIcons.Add, { color: 'brand' }),
        label: _react2.default.createElement(
          _.Text,
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Add'
          )
        ),
        onClick: this.onOpen,
        plain: true
      }),
      open && _react2.default.createElement(
        _.Layer,
        {
          position: 'bottom',
          full: 'horizontal',
          modal: false,
          responsive: false
        },
        _react2.default.createElement(
          _.Box,
          { align: 'start', pad: { vertical: 'medium', horizontal: 'small' } },
          _react2.default.createElement(
            _.Box,
            {
              align: 'center',
              direction: 'row',
              gap: 'small',
              round: 'medium',
              elevation: 'medium',
              pad: { vertical: 'xsmall', horizontal: 'small' },
              background: 'status-ok'
            },
            _react2.default.createElement(
              _.Box,
              { align: 'center', direction: 'row', gap: 'xsmall' },
              _react2.default.createElement(_grommetIcons.StatusGood, null),
              _react2.default.createElement(
                _.Text,
                null,
                'A new virtual machine has been successfully added'
              )
            ),
            _react2.default.createElement(_.Button, { icon: _react2.default.createElement(_grommetIcons.FormClose, null), onClick: this.onClose, plain: true })
          )
        )
      )
    );
  };

  return NotificationLayer;
}(_react.Component);

var MarginLayer = function (_Component4) {
  _inherits(MarginLayer, _Component4);

  function MarginLayer() {
    _classCallCheck(this, MarginLayer);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  MarginLayer.prototype.render = function render() {
    return _react2.default.createElement(
      _.Grommet,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _.Layer,
        {
          margin: 'large'
        },
        _react2.default.createElement(
          _.Box,
          { overflow: 'auto' },
          _react2.default.createElement(
            _.Box,
            { pad: 'xlarge' },
            'text'
          ),
          _react2.default.createElement(
            _.Box,
            { pad: 'xlarge' },
            'text'
          ),
          _react2.default.createElement(
            _.Box,
            { pad: 'xlarge' },
            'text'
          ),
          _react2.default.createElement(
            _.Box,
            { pad: 'xlarge' },
            'text'
          ),
          _react2.default.createElement(
            _.Box,
            { pad: 'xlarge' },
            'text'
          ),
          _react2.default.createElement(
            _.Box,
            { pad: 'xlarge' },
            'text'
          )
        )
      )
    );
  };

  return MarginLayer;
}(_react.Component);

(0, _react3.storiesOf)('Layer', module).add('Center', function () {
  return _react2.default.createElement(CenterLayer, null);
}).add('Form', function () {
  return _react2.default.createElement(FormLayer, null);
}).add('Notification', function () {
  return _react2.default.createElement(NotificationLayer, null);
}).add('Margin', function () {
  return _react2.default.createElement(MarginLayer, null);
});