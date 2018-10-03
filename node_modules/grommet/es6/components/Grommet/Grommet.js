var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { ThemeContext as IconThemeContext } from 'grommet-icons/es6/contexts/ThemeContext';

import { compose } from 'recompose';

import { ResponsiveContext, ThemeContext } from '../../contexts';
import { base as baseTheme } from '../../themes/base';
import { colorIsDark, deepMerge, getBreakpoint } from '../../utils';
import { withIconTheme } from '../hocs';

import { StyledGrommet } from './StyledGrommet';

var Grommet = function (_Component) {
  _inherits(Grommet, _Component);

  function Grommet() {
    var _temp, _this, _ret;

    _classCallCheck(this, Grommet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onResize = function () {
      var _this$state = _this.state,
          theme = _this$state.theme,
          responsive = _this$state.responsive;


      var breakpoint = getBreakpoint(window.innerWidth, theme);

      if (breakpoint !== responsive) {
        _this.setState({ responsive: breakpoint });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Grommet.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var iconTheme = nextProps.iconTheme,
        theme = nextProps.theme;
    var stateTheme = prevState.theme,
        themeProp = prevState.themeProp,
        iconThemeProp = prevState.iconThemeProp;


    var nextTheme = void 0;
    if (theme && (theme !== themeProp || iconTheme !== iconThemeProp)) {
      nextTheme = deepMerge(baseTheme, theme);
    } else if (!theme && (themeProp || !stateTheme)) {
      nextTheme = baseTheme;
    }

    if (nextTheme) {
      var color = nextTheme.global.colors.background;
      var dark = color ? colorIsDark(color) : false;
      var lightIconTheme = deepMerge(iconTheme, nextTheme.icon);
      var iconThemes = {
        dark: deepMerge(lightIconTheme, {
          color: nextTheme.global.text.color.dark
        }),
        light: lightIconTheme
      };
      return {
        theme: _extends({}, nextTheme, {
          dark: dark,
          icon: dark ? iconThemes.dark : iconThemes.light,
          iconThemes: iconThemes
        }),
        themeProp: theme,
        iconThemeProp: iconTheme
      };
    }
    return null;
  };

  Grommet.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  Grommet.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  Grommet.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['children']);

    delete rest.theme;
    var _state = this.state,
        responsive = _state.responsive,
        theme = _state.theme;


    return React.createElement(
      ThemeContext.Provider,
      { value: theme },
      React.createElement(
        IconThemeContext.Provider,
        { value: theme.icon },
        React.createElement(
          ResponsiveContext.Provider,
          { value: responsive },
          React.createElement(
            StyledGrommet,
            _extends({}, rest, { theme: theme }),
            children
          )
        )
      )
    );
  };

  return Grommet;
}(Component);

var GrommetDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  GrommetDoc = require('./doc').doc(Grommet); // eslint-disable-line global-require
}
var GrommetWrapper = compose(withIconTheme)(GrommetDoc || Grommet);

export { GrommetWrapper as Grommet };