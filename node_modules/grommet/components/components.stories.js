'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('./');

var _themes = require('../themes');

var _base = require('../themes/base');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Node = function Node(_ref) {
  var id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(_.Box, _extends({
    id: id,
    basis: 'xxsmall',
    margin: 'small',
    pad: 'medium',
    round: 'small',
    background: 'light-4'
  }, rest));
};

var connection = function connection(fromTarget, toTarget) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var color = _ref2.color,
      rest = _objectWithoutProperties(_ref2, ['color']);

  return _extends({
    fromTarget: fromTarget,
    toTarget: toTarget,
    color: color || 'accent-1',
    thickness: 'xsmall',
    round: true,
    type: 'rectilinear'
  }, rest);
};

var themes = {
  dark: _themes.dark,
  grommet: _themes.grommet,
  hpe: _themes.hpe
};

var Components = function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    var _temp, _this, _ret;

    _classCallCheck(this, Components);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      baseSize: 24,
      checkBox: true,
      radioButton: true,
      rangeSelector: [1, 2],
      themeName: 'grommet'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Components.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        baseSize = _state.baseSize,
        checkBox = _state.checkBox,
        radioButton = _state.radioButton,
        rangeSelector = _state.rangeSelector,
        tabIndex = _state.tabIndex,
        themeName = _state.themeName;

    var theme = (0, _utils.deepMerge)((0, _base.generate)(baseSize), themes[themeName]);

    var content = [_react2.default.createElement(
      _.Box,
      { key: 'type', align: 'start' },
      _react2.default.createElement(
        _.Heading,
        { margin: { top: 'none' } },
        'Heading'
      ),
      _react2.default.createElement(
        _.Paragraph,
        null,
        'Paragraph'
      ),
      _react2.default.createElement(
        _.Text,
        null,
        'Text'
      ),
      _react2.default.createElement(
        _.Anchor,
        { href: '' },
        'Anchor'
      ),
      _react2.default.createElement(_.Menu, {
        label: 'Menu',
        items: [{ label: 'One', onClick: function onClick() {} }, { label: 'Two' }]
      }),
      _react2.default.createElement(_.Button, { label: 'Button', onClick: function onClick() {} })
    ), _react2.default.createElement(
      _.Box,
      { key: 'input', gap: 'small' },
      _react2.default.createElement(_.Select, { placeholder: 'Select', options: ['One', 'Two'], onChange: function onChange() {} }),
      _react2.default.createElement(_.CheckBox, {
        name: 'check',
        checked: checkBox,
        label: 'CheckBox',
        onChange: function onChange(event) {
          return _this2.setState({ checkBox: event.target.checked });
        }
      }),
      _react2.default.createElement(_.CheckBox, {
        name: 'toggle',
        toggle: true,
        checked: checkBox,
        label: 'CheckBox toggle',
        onChange: function onChange(event) {
          return _this2.setState({ checkBox: event.target.checked });
        }
      }),
      _react2.default.createElement(_.RadioButton, {
        name: 'radio',
        checked: radioButton,
        label: 'RadioButton',
        onChange: function onChange(event) {
          return _this2.setState({ radioButton: event.target.checked });
        }
      }),
      _react2.default.createElement(_.TextInput, { placeholder: 'TextInput' }),
      _react2.default.createElement(_.TextArea, { placeholder: 'TextArea' }),
      _react2.default.createElement(_.RangeInput, { value: 24, onChange: function onChange() {} }),
      _react2.default.createElement(
        _.Stack,
        null,
        _react2.default.createElement(
          _.Box,
          { direction: 'row', justify: 'between' },
          [0, 1, 2, 3].map(function (value) {
            return _react2.default.createElement(
              _.Box,
              { key: value, pad: 'small' },
              _react2.default.createElement(
                _.Text,
                { style: { fontFamily: 'monospace' } },
                value
              )
            );
          })
        ),
        _react2.default.createElement(_.RangeSelector, {
          direction: 'horizontal',
          invert: false,
          min: 0,
          max: 3,
          size: 'full',
          round: 'small',
          values: rangeSelector,
          onChange: function onChange(values) {
            return _this2.setState({ rangeSelector: values });
          }
        })
      ),
      _react2.default.createElement(
        _.FormField,
        { label: 'FormField' },
        _react2.default.createElement(_.TextInput, { placeholder: 'TextInput' })
      )
    ), _react2.default.createElement(
      _.Box,
      { key: 'time', gap: 'medium' },
      _react2.default.createElement(_.Calendar, { size: 'small' }),
      _react2.default.createElement(_.Clock, { type: 'digital' }),
      _react2.default.createElement(_.Clock, null)
    ), _react2.default.createElement(
      _.Box,
      { key: 'measure', gap: 'medium' },
      _react2.default.createElement(_.Chart, {
        type: 'bar',
        round: true,
        size: 'small',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      }),
      _react2.default.createElement(_.Meter, {
        type: 'bar',
        round: true,
        size: 'small',
        background: 'light-3',
        values: [{ value: 30 }]
      })
    ), _react2.default.createElement(
      _.Box,
      { key: 'visualize', gap: 'small' },
      _react2.default.createElement(
        _.Distribution,
        {
          basis: 'small',
          values: [{ value: 50, color: 'light-3' }, { value: 30, color: 'accent-1' }, { value: 20, color: 'light-4' }, { value: 10, color: 'light-3' }, { value: 5, color: 'light-4' }]
        },
        function (value) {
          return _react2.default.createElement(
            _.Box,
            { pad: 'xsmall', background: value.color, fill: true },
            _react2.default.createElement(
              _.Text,
              { size: 'large' },
              value.value
            )
          );
        }
      ),
      _react2.default.createElement(
        _.Stack,
        null,
        _react2.default.createElement(
          _.Box,
          null,
          _react2.default.createElement(
            _.Box,
            { direction: 'row' },
            [1, 2].map(function (id) {
              return _react2.default.createElement(Node, { key: id, id: id });
            })
          ),
          _react2.default.createElement(
            _.Box,
            { direction: 'row' },
            [3, 4].map(function (id) {
              return _react2.default.createElement(Node, { key: id, id: id });
            })
          )
        ),
        _react2.default.createElement(_.Diagram, {
          connections: [connection('1', '4')]
        })
      )
    ), _react2.default.createElement(
      _.Box,
      { key: 'dataTable', alignSelf: 'start' },
      _react2.default.createElement(_.DataTable, {
        columns: [{ property: 'name', header: 'Name' }, { property: 'color', header: 'Color' }],
        data: [{ name: 'Alan', color: 'blue' }, { name: 'Chris', color: 'purple' }, { name: 'Eric', color: 'orange' }],
        sortable: true
      })
    ), _react2.default.createElement(
      _.Box,
      { key: 'accordion' },
      _react2.default.createElement(
        _.Accordion,
        null,
        _react2.default.createElement(
          _.AccordionPanel,
          { label: 'Accordion Panel 1' },
          _react2.default.createElement(
            _.Box,
            { pad: 'small' },
            _react2.default.createElement(
              _.Text,
              null,
              'Accordion panel 1 content'
            )
          )
        ),
        _react2.default.createElement(
          _.AccordionPanel,
          { label: 'Accordion Panel 2' },
          _react2.default.createElement(
            _.Box,
            { pad: 'small' },
            _react2.default.createElement(
              _.Text,
              null,
              'Accordion panel 2 content'
            )
          )
        )
      )
    ), _react2.default.createElement(
      _.Box,
      { key: 'tabs' },
      _react2.default.createElement(
        _.Tabs,
        {
          activeIndex: tabIndex,
          onActive: function onActive(index) {
            return _this2.setState({ tabIndex: index });
          }
        },
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 1' },
          _react2.default.createElement(
            _.Box,
            { pad: 'small' },
            _react2.default.createElement(
              _.Text,
              null,
              'Tab 1 content'
            )
          )
        ),
        _react2.default.createElement(
          _.Tab,
          { title: 'Tab 2' },
          _react2.default.createElement(
            _.Box,
            { pad: 'small' },
            _react2.default.createElement(
              _.Text,
              null,
              'Tab 2 content'
            )
          )
        )
      )
    ), _react2.default.createElement(
      _.Box,
      { key: 'video', alignSelf: 'start' },
      _react2.default.createElement(
        _.Video,
        null,
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.webm', type: 'video/webm' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.ogv', type: 'video/ogg' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.mp4', type: 'video/mp4' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.3gp', type: 'video/3gp' })
      )
    )];

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _.Grommet,
        { theme: _themes.grommet },
        _react2.default.createElement(
          _.Box,
          {
            direction: 'row-responsive',
            gap: 'medium',
            justify: 'end',
            align: 'center',
            margin: 'small'
          },
          _react2.default.createElement(
            _.Box,
            { basis: 'small' },
            _react2.default.createElement(_.Select, {
              plain: true,
              size: 'small',
              options: ['grommet', 'dark', 'hpe'],
              value: themeName,
              onChange: function onChange(event) {
                return _this2.setState({ themeName: event.option });
              }
            })
          ),
          _react2.default.createElement(
            _.Box,
            { basis: 'small' },
            _react2.default.createElement(_.RangeInput, {
              min: 16,
              max: 36,
              step: 2,
              value: baseSize,
              onChange: function onChange(event) {
                return _this2.setState({ baseSize: parseInt(event.target.value, 10) });
              }
            })
          ),
          _react2.default.createElement(
            _.Text,
            { size: 'small' },
            baseSize,
            'px base spacing'
          )
        )
      ),
      _react2.default.createElement(
        _.Grommet,
        { theme: theme },
        _react2.default.createElement(
          _.Box,
          {
            pad: 'medium',
            background: theme.global.colors.background || theme.global.colors.white
          },
          _.Grid.available ? _react2.default.createElement(
            _.Grid,
            { fill: true, columns: 'small', gap: 'medium' },
            content
          ) : _react2.default.createElement(
            _.Box,
            { direction: 'row', wrap: true, align: 'start', gap: 'large' },
            content
          )
        )
      )
    );
  };

  return Components;
}(_react.Component);

(0, _react3.storiesOf)('Components', module).add('All', function () {
  return _react2.default.createElement(Components, null);
});