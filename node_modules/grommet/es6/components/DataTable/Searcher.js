function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import { FormSearch } from 'grommet-icons/es6/icons/FormSearch';


import { Box } from '../Box';
import { Button } from '../Button';
import { Keyboard } from '../Keyboard';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

export var Searcher = function (_Component) {
  _inherits(Searcher, _Component);

  function Searcher() {
    var _temp, _this, _ret;

    _classCallCheck(this, Searcher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.inputRef = React.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Searcher.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        filtering = _props.filtering,
        property = _props.property;

    if (this.inputRef.current && filtering === property) {
      this.inputRef.current.focus();
    }
  };

  Searcher.prototype.render = function render() {
    var _props2 = this.props,
        filtering = _props2.filtering,
        filters = _props2.filters,
        onFilter = _props2.onFilter,
        onFiltering = _props2.onFiltering,
        property = _props2.property;

    if (filtering === property) {
      return React.createElement(
        Keyboard,
        { onEsc: function onEsc() {
            return onFiltering(undefined);
          } },
        React.createElement(
          Box,
          { flex: true, pad: { horizontal: 'small' } },
          React.createElement(TextInput, {
            ref: this.inputRef,
            value: filters[property],
            onChange: function onChange(event) {
              return onFilter(property, event.target.value);
            },
            onBlur: function onBlur() {
              return onFiltering(undefined);
            }
          })
        )
      );
    }

    return React.createElement(
      Fragment,
      null,
      filters[property] ? React.createElement(
        Box,
        { flex: false, pad: { horizontal: 'small' } },
        React.createElement(
          Text,
          null,
          filters[property]
        )
      ) : null,
      React.createElement(Button, {
        icon: React.createElement(FormSearch, { color: filtering === property ? 'brand' : 'border' }),
        hoverIndicator: true,
        onClick: function onClick() {
          return onFiltering(filtering === property ? undefined : property);
        }
      })
    );
  };

  return Searcher;
}(Component);