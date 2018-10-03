var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { ThemeContext as IconThemeContext } from 'grommet-icons/es6/contexts/ThemeContext';


import { FocusedContainer } from '../FocusedContainer';
import { Keyboard } from '../Keyboard';
import { withTheme } from '../hocs';
import { backgroundIsDark } from '../../utils';

import { StyledLayer, StyledContainer, StyledOverlay } from './StyledLayer';

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, LayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.containerRef = React.createRef(), _this.layerRef = React.createRef(), _this.makeLayerVisible = function () {
      var node = findDOMNode(_this.layerRef.current || _this.containerRef.current);
      if (node && node.scrollIntoView) {
        node.scrollIntoView();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LayerContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var theme = nextProps.theme;
    var stateTheme = prevState.theme;
    // set dark context based on layer background, not Layer's container.

    var dark = theme.dark;
    if (theme.layer.background) {
      dark = backgroundIsDark(theme.layer.background, theme);
    }
    if (!dark !== !theme.dark) {
      if (!stateTheme || dark !== stateTheme.dark) {
        return {
          theme: _extends({}, theme, {
            dark: dark,
            icon: dark ? theme.iconThemes.dark : theme.iconThemes.light
          })
        };
      }
    } else if (stateTheme) {
      return { theme: undefined };
    }
    return null;
  };

  LayerContainer.prototype.componentDidMount = function componentDidMount() {
    var position = this.props.position;

    if (position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  LayerContainer.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var position = this.props.position;

    if (prevProps.position !== position && position !== 'hidden') {
      this.makeLayerVisible();
    }
  };

  LayerContainer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        id = _props.id,
        modal = _props.modal,
        onClickOutside = _props.onClickOutside,
        onEsc = _props.onEsc,
        plain = _props.plain,
        position = _props.position,
        responsive = _props.responsive,
        propsTheme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'id', 'modal', 'onClickOutside', 'onEsc', 'plain', 'position', 'responsive', 'theme']);

    var stateTheme = this.state.theme;

    var theme = stateTheme || propsTheme;

    var content = React.createElement(
      StyledContainer,
      _extends({
        id: id
      }, rest, {
        theme: theme,
        position: position,
        plain: plain,
        responsive: responsive,
        ref: this.containerRef
      }),
      children
    );

    if (modal) {
      content = React.createElement(
        StyledLayer,
        {
          id: id,
          plain: plain,
          position: position,
          theme: theme,
          responsive: responsive,
          tabIndex: '-1',
          ref: this.layerRef
        },
        React.createElement(StyledOverlay, { onClick: onClickOutside, theme: theme }),
        content
      );
    }

    if (onEsc) {
      content = React.createElement(
        Keyboard,
        { target: 'document', onEsc: onEsc },
        content
      );
    }

    if (modal) {
      content = React.createElement(
        FocusedContainer,
        { hidden: position === 'hidden', restrictScroll: true },
        React.createElement(
          IconThemeContext.Provider,
          { value: theme.icon },
          content
        )
      );
    }

    return content;
  };

  return LayerContainer;
}(Component);

LayerContainer.defaultProps = {
  full: false,
  margin: 'none',
  modal: true,
  position: 'center'
};


var LayerContainerWrapper = withTheme(LayerContainer);

export { LayerContainerWrapper as LayerContainer };