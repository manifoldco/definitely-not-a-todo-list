var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';
import { withTheme } from '../hocs';

import { AccordionContext } from './AccordionContext';

var activeAsArray = function activeAsArray(active) {
  return typeof active === 'number' ? [active] : active;
};

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _temp, _this, _ret;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeIndexes: []
    }, _this.onPanelChange = function (index) {
      var activeIndexes = [].concat(_this.state.activeIndexes);
      var _this$props = _this.props,
          onActive = _this$props.onActive,
          multiple = _this$props.multiple;


      var activeIndex = activeIndexes.indexOf(index);
      if (activeIndex > -1) {
        activeIndexes.splice(activeIndex, 1);
      } else if (multiple) {
        activeIndexes.push(index);
      } else {
        activeIndexes = [index];
      }

      _this.setState({ activeIndexes: activeIndexes }, function () {
        if (onActive) {
          onActive(activeIndexes);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Accordion.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var activeIndex = nextProps.activeIndex;
    var stateActiveIndexes = prevState.activeIndexes,
        stateActiveIndex = prevState.activeIndex;


    var activeIndexes = activeAsArray(activeIndex) || [];

    if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) && activeIndexes.join() !== stateActiveIndexes.join()) {
      return { activeIndexes: activeIndexes, activeIndex: activeIndex };
    }

    return null;
  };

  Accordion.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        animate = _props.animate,
        children = _props.children,
        messages = _props.messages,
        rest = _objectWithoutProperties(_props, ['animate', 'children', 'messages']);

    var activeIndexes = this.state.activeIndexes;


    delete rest.onActive;

    return React.createElement(
      Box,
      _extends({ role: 'tablist' }, rest, { overflow: 'auto' }),
      Children.toArray(children).map(function (panel, index) {
        return React.createElement(
          AccordionContext.Provider,
          {
            key: 'accordion-panel_' + index,
            value: {
              active: activeIndexes.indexOf(index) > -1,
              animate: animate,
              messages: messages,
              onPanelChange: function onPanelChange() {
                return _this2.onPanelChange(index);
              }
            }
          },
          panel
        );
      })
    );
  };

  return Accordion;
}(Component);

Accordion.defaultProps = {
  animate: true,
  messages: {
    tabContents: 'Tab Contents'
  }
};


var AccordionDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  AccordionDoc = require('./doc').doc(Accordion); // eslint-disable-line global-require
}
var AccordionWrapper = compose(withTheme)(AccordionDoc || Accordion);

export { AccordionWrapper as Accordion };