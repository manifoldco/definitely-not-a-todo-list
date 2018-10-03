function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Grommet, WorldMap } from '../';
import { grommet } from '../../themes';

var SimpleWorldMap = function (_Component) {
  _inherits(SimpleWorldMap, _Component);

  function SimpleWorldMap() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleWorldMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onSelectPlace = function (place) {
      _this.setState({ places: [{ color: 'accent-1', location: place }] });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleWorldMap.prototype.render = function render() {
    var places = this.state.places;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(WorldMap, { onSelectPlace: this.onSelectPlace, places: places })
    );
  };

  return SimpleWorldMap;
}(Component);

storiesOf('WorldMap', module).add('Simple WorldMap', function () {
  return React.createElement(SimpleWorldMap, null);
});