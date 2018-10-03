function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Add } from 'grommet-icons/es6/icons/Add';
import { Close } from 'grommet-icons/es6/icons/Close';
import { FormClose } from 'grommet-icons/es6/icons/FormClose';
import { StatusGood } from 'grommet-icons/es6/icons/StatusGood';
import { Trash } from 'grommet-icons/es6/icons/Trash';


import { Box, Button, FormField, Grommet, Heading, Layer, Select, Text, TextInput } from '../';
import { grommet } from '../../themes';

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

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(Button, {
        icon: React.createElement(Trash, null),
        label: React.createElement(
          Text,
          null,
          React.createElement(
            'strong',
            null,
            'Remove'
          )
        ),
        onClick: this.onOpen,
        plain: true
      }),
      open && React.createElement(
        Layer,
        {
          position: 'center',
          modal: true,
          onClickOutside: this.onClose,
          onEsc: this.onClose
        },
        React.createElement(
          Box,
          { pad: 'medium', gap: 'small', width: 'medium' },
          React.createElement(
            Heading,
            { level: 3, margin: 'none' },
            'Confirm'
          ),
          React.createElement(
            Text,
            null,
            'Are you sure you want to delete?'
          ),
          React.createElement(
            Box,
            {
              tag: 'footer',
              gap: 'small',
              direction: 'row',
              align: 'center',
              justify: 'end',
              pad: { top: 'medium', bottom: 'small' }
            },
            React.createElement(Button, {
              label: 'Open 2',
              onClick: this.onOpen2,
              color: 'dark-6'
            }),
            React.createElement(Button, {
              label: React.createElement(
                Text,
                { color: 'white' },
                React.createElement(
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
      open2 && React.createElement(
        Layer,
        {
          position: 'top',
          modal: true,
          onClickOutside: this.onClose2,
          onEsc: this.onClose2
        },
        React.createElement(
          Box,
          { pad: 'medium', gap: 'small', width: 'medium' },
          React.createElement(
            Heading,
            { level: 3, margin: 'none' },
            'Confirm 2'
          ),
          React.createElement(
            Box,
            {
              tag: 'footer',
              gap: 'small',
              direction: 'row',
              align: 'center',
              justify: 'end',
              pad: { top: 'medium', bottom: 'small' }
            },
            React.createElement(Button, {
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
}(Component);

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

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { align: 'start' },
        React.createElement(Button, {
          icon: React.createElement(Add, null),
          label: 'Add',
          onClick: this.onOpen
        }),
        open && React.createElement(
          Layer,
          {
            position: 'right',
            full: 'vertical',
            modal: true,
            onClickOutside: this.onClose,
            onEsc: this.onClose
          },
          React.createElement(
            Box,
            {
              tag: 'form',
              fill: 'vertical',
              overflow: 'auto',
              width: 'medium',
              pad: 'medium',
              onSubmit: this.onClose
            },
            React.createElement(
              Box,
              { flex: false, direction: 'row', justify: 'between' },
              React.createElement(
                Heading,
                { level: 2, margin: 'none' },
                'Add'
              ),
              React.createElement(Button, { icon: React.createElement(Close, null), onClick: this.onClose })
            ),
            React.createElement(
              Box,
              { flex: 'grow', overflow: 'auto', pad: { vertical: 'medium' } },
              React.createElement(
                FormField,
                { label: 'First' },
                React.createElement(TextInput, null)
              ),
              React.createElement(
                FormField,
                { label: 'Second' },
                React.createElement(TextInput, null)
              ),
              React.createElement(
                FormField,
                { label: 'Third' },
                React.createElement(TextInput, null)
              ),
              React.createElement(
                FormField,
                { label: 'Fourth' },
                React.createElement(Select, {
                  options: ['one', 'two', 'three'],
                  value: fourthOption,
                  onChange: function onChange(_ref) {
                    var option = _ref.option;
                    return _this3.setState({ fourthOption: option });
                  }
                })
              )
            ),
            React.createElement(
              Box,
              { flex: false, tag: 'footer', align: 'start' },
              React.createElement(Button, {
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
}(Component);

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

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(Button, {
        icon: React.createElement(Add, { color: 'brand' }),
        label: React.createElement(
          Text,
          null,
          React.createElement(
            'strong',
            null,
            'Add'
          )
        ),
        onClick: this.onOpen,
        plain: true
      }),
      open && React.createElement(
        Layer,
        {
          position: 'bottom',
          full: 'horizontal',
          modal: false,
          responsive: false
        },
        React.createElement(
          Box,
          { align: 'start', pad: { vertical: 'medium', horizontal: 'small' } },
          React.createElement(
            Box,
            {
              align: 'center',
              direction: 'row',
              gap: 'small',
              round: 'medium',
              elevation: 'medium',
              pad: { vertical: 'xsmall', horizontal: 'small' },
              background: 'status-ok'
            },
            React.createElement(
              Box,
              { align: 'center', direction: 'row', gap: 'xsmall' },
              React.createElement(StatusGood, null),
              React.createElement(
                Text,
                null,
                'A new virtual machine has been successfully added'
              )
            ),
            React.createElement(Button, { icon: React.createElement(FormClose, null), onClick: this.onClose, plain: true })
          )
        )
      )
    );
  };

  return NotificationLayer;
}(Component);

var MarginLayer = function (_Component4) {
  _inherits(MarginLayer, _Component4);

  function MarginLayer() {
    _classCallCheck(this, MarginLayer);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  MarginLayer.prototype.render = function render() {
    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Layer,
        {
          margin: 'large'
        },
        React.createElement(
          Box,
          { overflow: 'auto' },
          React.createElement(
            Box,
            { pad: 'xlarge' },
            'text'
          ),
          React.createElement(
            Box,
            { pad: 'xlarge' },
            'text'
          ),
          React.createElement(
            Box,
            { pad: 'xlarge' },
            'text'
          ),
          React.createElement(
            Box,
            { pad: 'xlarge' },
            'text'
          ),
          React.createElement(
            Box,
            { pad: 'xlarge' },
            'text'
          ),
          React.createElement(
            Box,
            { pad: 'xlarge' },
            'text'
          )
        )
      )
    );
  };

  return MarginLayer;
}(Component);

storiesOf('Layer', module).add('Center', function () {
  return React.createElement(CenterLayer, null);
}).add('Form', function () {
  return React.createElement(FormLayer, null);
}).add('Notification', function () {
  return React.createElement(NotificationLayer, null);
}).add('Margin', function () {
  return React.createElement(MarginLayer, null);
});