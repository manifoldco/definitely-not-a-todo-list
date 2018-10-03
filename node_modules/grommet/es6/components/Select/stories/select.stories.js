var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { createRef, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { storiesOf } from '@storybook/react';

import { FormClose } from 'grommet-icons/es6/icons/FormClose';


import { Box, Button, CheckBox, Grommet, Select, Text } from '../../';
import { grommet } from '../../../themes';

import { theme as customSearchTheme } from './theme';
import { SearchInputContext } from './components/SearchInputContext';
import { deepMerge } from '../../../utils';

var customRoundedTheme = deepMerge(grommet, {
  global: {
    control: {
      border: {
        radius: '24px'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '12px'
    }
  },
  text: {
    medium: '13px'
  },
  textInput: {
    extend: 'padding: 0 12px;'
  },
  select: {
    control: {
      extend: 'padding: 3px 6px;'
    }
  }
});

var SimpleSelect = function (_Component) {
  _inherits(SimpleSelect, _Component);

  function SimpleSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      options: ['one', 'two'],
      value: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleSelect.prototype.render = function render() {
    var _this2 = this;

    var theme = this.props.theme;
    var _state = this.state,
        options = _state.options,
        value = _state.value;

    return React.createElement(
      Grommet,
      { theme: theme || grommet },
      React.createElement(Select, {
        id: 'select',
        name: 'select',
        placeholder: 'Select',
        value: value,
        options: options,
        onChange: function onChange(_ref) {
          var option = _ref.option;
          return _this2.setState({ value: option });
        }
      })
    );
  };

  return SimpleSelect;
}(Component);

var DEFAULT_OPTIONS = [];
for (var i = 1; i <= 200; i += 1) {
  DEFAULT_OPTIONS.push('option ' + i);
}
var SearchSelect = function (_Component2) {
  _inherits(SearchSelect, _Component2);

  function SearchSelect() {
    var _temp2, _this3, _ret2;

    _classCallCheck(this, SearchSelect);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.state = {
      options: DEFAULT_OPTIONS,
      value: ''
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  SearchSelect.prototype.render = function render() {
    var _this4 = this;

    var _state2 = this.state,
        options = _state2.options,
        value = _state2.value;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(Select, {
        size: 'medium',
        placeholder: 'Select',
        value: value,
        options: options,
        onChange: function onChange(_ref2) {
          var option = _ref2.option;
          return _this4.setState({ value: option });
        },
        onClose: function onClose() {
          return _this4.setState({ options: DEFAULT_OPTIONS });
        },
        onSearch: function onSearch(text) {
          var exp = new RegExp(text, 'i');
          _this4.setState({ options: DEFAULT_OPTIONS.filter(function (o) {
              return exp.test(o);
            }) });
        }
      })
    );
  };

  return SearchSelect;
}(Component);

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var SeasonsSelect = function (_Component3) {
  _inherits(SeasonsSelect, _Component3);

  function SeasonsSelect() {
    var _temp3, _this5, _ret3;

    _classCallCheck(this, SeasonsSelect);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this5 = _possibleConstructorReturn(this, _Component3.call.apply(_Component3, [this].concat(args))), _this5), _this5.state = {
      selectedSeasons: []
    }, _this5.onRemoveSeason = function (season) {
      var selectedSeasons = _this5.state.selectedSeasons;

      var newSeasons = [].concat(selectedSeasons);
      newSeasons.splice(selectedSeasons.indexOf(season), 1);
      _this5.setState({
        selectedSeasons: newSeasons
      });
    }, _this5.renderSeason = function (season) {
      return React.createElement(
        Button,
        {
          key: 'season_tag_' + season,
          href: '#',
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();
            _this5.onRemoveSeason(season);
          },
          onFocus: function onFocus(event) {
            return event.stopPropagation();
          }
        },
        React.createElement(
          Box,
          {
            align: 'center',
            direction: 'row',
            gap: 'xsmall',
            pad: { vertical: 'xsmall', horizontal: 'small' },
            margin: 'xsmall',
            background: 'accent-1',
            round: 'large'
          },
          React.createElement(
            Text,
            { size: 'small', color: 'white' },
            season
          ),
          React.createElement(
            Box,
            { background: 'white', round: 'full', margin: { left: 'xsmall' } },
            React.createElement(FormClose, {
              color: 'accent-1',
              size: 'small',
              style: { width: '12px', height: '12px' }
            })
          )
        )
      );
    }, _this5.renderOption = function (option) {
      return React.createElement(
        Box,
        {
          pad: 'small',
          background: _this5.state.selectedSeasons.indexOf(option) >= 0 ? 'active' : undefined
        },
        option
      );
    }, _temp3), _possibleConstructorReturn(_this5, _ret3);
  }

  SeasonsSelect.prototype.render = function render() {
    var _this6 = this;

    var selectedSeasons = this.state.selectedSeasons;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { direction: 'row' },
        React.createElement(
          Box,
          { align: 'start', basis: 'medium', direction: 'row' },
          React.createElement(
            Select,
            {
              size: 'medium',
              placeholder: 'Select Season',
              multiple: true,
              value: selectedSeasons && selectedSeasons.length ? React.createElement(
                Box,
                { wrap: true, direction: 'row', style: { width: '208px' } },
                selectedSeasons.map(this.renderSeason)
              ) : undefined,
              options: allSeasons,
              onChange: function onChange(_ref3) {
                var option = _ref3.option;

                var newSelectedSeasons = [].concat(_this6.state.selectedSeasons);
                var seasonIndex = newSelectedSeasons.indexOf(option);
                if (seasonIndex >= 0) {
                  newSelectedSeasons.splice(seasonIndex, 1);
                } else {
                  newSelectedSeasons.push(option);
                }
                _this6.setState({ selectedSeasons: newSelectedSeasons.sort() });
              }
            },
            this.renderOption
          )
        )
      )
    );
  };

  return SeasonsSelect;
}(Component);

var allContentPartners = [{
  name: 'Test Partner',
  id: '32131232'
}, {
  name: 'Test Partner 1',
  id: '32131232'
}, {
  name: 'Test Partner 2',
  id: '32131242'
}, {
  name: 'Test Partner 3',
  id: '32131252'
}, {
  name: 'Test Partner 4',
  id: '32131262'
}, {
  name: 'Test Partner 5',
  id: '32131272'
}, {
  name: 'Test Partner 6',
  id: '32131231'
}, {
  name: 'Test Partner 7',
  id: '32131234'
}, {
  name: 'Test Partner 8',
  id: '32131245'
}, {
  name: 'Test Partner 9',
  id: '32131256'
}, {
  name: 'Test Partner 10',
  id: '32131269'
}, {
  name: 'Test Partner 11',
  id: '32131244'
}];

var CustomSearchSelect = function (_Component4) {
  _inherits(CustomSearchSelect, _Component4);

  function CustomSearchSelect() {
    var _temp4, _this7, _ret4;

    _classCallCheck(this, CustomSearchSelect);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _ret4 = (_temp4 = (_this7 = _possibleConstructorReturn(this, _Component4.call.apply(_Component4, [this].concat(args))), _this7), _this7.state = {
      contentPartners: allContentPartners,
      selectedContentPartners: [],
      searching: false
    }, _this7.selectRef = createRef(), _this7.clearContentPartners = function () {
      return _this7.setState({ selectedContentPartners: [] });
    }, _this7.renderOption = function (_ref4) {
      var name = _ref4.name;
      var selectedContentPartners = _this7.state.selectedContentPartners;

      return React.createElement(
        Box,
        { direction: 'row', align: 'center', pad: 'small', flex: false },
        React.createElement(CheckBox, {
          tabIndex: '-1',
          checked: selectedContentPartners.some(function (partner) {
            return partner.name === name;
          }),
          value: name,
          onChange: function onChange() {}
        }),
        React.createElement(
          Text,
          { size: 'small' },
          name
        )
      );
    }, _this7.renderContentPartners = function () {
      var selectedContentPartners = _this7.state.selectedContentPartners;

      return React.createElement(
        Box,
        {
          direction: 'row',
          gap: 'xsmall',
          pad: { left: 'small', vertical: 'small' },
          align: 'center',
          flex: true
        },
        React.createElement(
          Box,
          {
            background: 'brand',
            round: 'medium',
            align: 'center',
            justify: 'center',
            pad: { horizontal: 'xsmall' },
            style: { minWidth: '21px' }
          },
          React.createElement(
            Text,
            { size: 'small' },
            selectedContentPartners.length
          )
        ),
        React.createElement(
          Box,
          { flex: true },
          React.createElement(
            Text,
            { size: 'small', truncate: true },
            selectedContentPartners.map(function (_ref5) {
              var name = _ref5.name;
              return name;
            }).join(', ')
          )
        ),
        React.createElement(
          Button,
          {
            href: '#',
            onFocus: function onFocus(event) {
              return event.stopPropagation();
            },
            onClick: function onClick(event) {
              event.preventDefault();
              event.stopPropagation();
              _this7.clearContentPartners();
              findDOMNode(_this7.selectRef.current).focus();
            }
          },
          React.createElement(
            Box,
            { background: 'gray', round: 'full' },
            React.createElement(FormClose, { style: { width: '12px', height: '12px' } })
          )
        )
      );
    }, _temp4), _possibleConstructorReturn(_this7, _ret4);
  }

  CustomSearchSelect.prototype.render = function render() {
    var _this8 = this;

    var _state3 = this.state,
        contentPartners = _state3.contentPartners,
        searching = _state3.searching,
        selectedContentPartners = _state3.selectedContentPartners;


    var selectedPartnerNames = selectedContentPartners.map(function (_ref6) {
      var name = _ref6.name;
      return name;
    });

    return React.createElement(
      Grommet,
      { theme: customSearchTheme },
      React.createElement(
        Box,
        { align: 'start', width: 'medium', direction: 'row' },
        React.createElement(
          SearchInputContext.Provider,
          { value: { searching: searching } },
          React.createElement(
            Select,
            {
              ref: this.selectRef,
              closeOnChange: false,
              placeholder: 'Select Content Partners',
              searchPlaceholder: 'Search Content Partners',
              multiple: true,
              value: selectedContentPartners.length ? this.renderContentPartners() : undefined,
              options: contentPartners,
              onChange: function onChange(_ref7) {
                var option = _ref7.option;

                var newSelectedPartners = [].concat(_this8.state.selectedContentPartners);
                var seasonIndex = newSelectedPartners.map(function (_ref8) {
                  var name = _ref8.name;
                  return name;
                }).indexOf(option.name);
                if (seasonIndex >= 0) {
                  newSelectedPartners.splice(seasonIndex, 1);
                } else {
                  newSelectedPartners.push(option);
                }
                _this8.setState({ selectedContentPartners: newSelectedPartners });
              },
              onClose: function onClose() {
                return _this8.setState({
                  contentPartners: allContentPartners.sort(function (p1, p2) {
                    var p1Exists = selectedPartnerNames.includes(p1.name);
                    var p2Exists = selectedPartnerNames.includes(p2.name);

                    if (!p1Exists && p2Exists) {
                      return 1;
                    } else if (p1Exists && !p2Exists) {
                      return -1;
                    } else if (p1.name.toLowerCase() < p2.name.toLowerCase()) {
                      return -1;
                    }
                    return 1;
                  })
                });
              },
              onSearch: function onSearch(query) {
                _this8.setState({ searching: true }, function () {
                  setTimeout(function () {
                    _this8.setState({
                      searching: false,
                      contentPartners: allContentPartners.filter(function (s) {
                        return s.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
                      })
                    });
                  }, 500);
                });
              }
            },
            this.renderOption
          )
        )
      )
    );
  };

  return CustomSearchSelect;
}(Component);

var DarkSelect = function (_Component5) {
  _inherits(DarkSelect, _Component5);

  function DarkSelect() {
    var _temp5, _this9, _ret5;

    _classCallCheck(this, DarkSelect);

    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _ret5 = (_temp5 = (_this9 = _possibleConstructorReturn(this, _Component5.call.apply(_Component5, [this].concat(args))), _this9), _this9.state = {
      options: ['one', 'two'],
      value: ''
    }, _temp5), _possibleConstructorReturn(_this9, _ret5);
  }

  DarkSelect.prototype.render = function render() {
    var _this10 = this;

    var _state4 = this.state,
        options = _state4.options,
        value = _state4.value;

    return React.createElement(
      Grommet,
      _extends({ full: true, theme: grommet }, this.props),
      React.createElement(
        Box,
        { fill: true, background: 'dark-1', align: 'center', justify: 'center' },
        React.createElement(Select, {
          placeholder: 'Select',
          value: value,
          options: options,
          onChange: function onChange(_ref9) {
            var option = _ref9.option;
            return _this10.setState({ value: option });
          }
        })
      )
    );
  };

  return DarkSelect;
}(Component);

storiesOf('Select', module).add('Simple Select', function () {
  return React.createElement(SimpleSelect, null);
}).add('Search Select', function () {
  return React.createElement(SearchSelect, null);
}).add('Seasons Select', function () {
  return React.createElement(SeasonsSelect, null);
}).add('Custom Search', function () {
  return React.createElement(CustomSearchSelect, null);
}).add('Dark', function () {
  return React.createElement(DarkSelect, null);
}).add('Custom Colors', function () {
  return React.createElement(DarkSelect, { theme: { global: { font: { family: 'Arial' } }, select: { background: '#000000', iconColor: '#d3d3d3' } } });
}).add('Custom Rounded', function () {
  return React.createElement(SimpleSelect, { theme: customRoundedTheme });
});