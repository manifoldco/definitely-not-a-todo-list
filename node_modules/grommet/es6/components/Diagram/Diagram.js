var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';

import { colorForName, parseMetricToNum } from '../../utils';
import { withTheme } from '../hocs';

import { StyledDiagram } from './StyledDiagram';

var computeMidPoint = function computeMidPoint(fromPoint, toPoint) {
  return [fromPoint[0] > toPoint[0] ? toPoint[0] + (fromPoint[0] - toPoint[0]) / 2 : fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] > toPoint[1] ? toPoint[1] + (fromPoint[1] - toPoint[1]) / 2 : fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
};

var COMMANDS = {
  curved: function curved(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = 'M ' + (fromPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ';
    if (anchor === 'horizontal') {
      cmds += 'Q ' + (midPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ' + (midPoint[0] + offset + ',' + (midPoint[1] + offset) + ' ');
    } else {
      cmds += 'Q ' + (fromPoint[0] + offset) + ',' + (midPoint[1] + offset) + ' ' + (midPoint[0] + offset + ',' + (midPoint[1] + offset) + ' ');
    }
    cmds += 'T ' + (toPoint[0] + offset) + ',' + (toPoint[1] + offset);
    return cmds;
  },
  direct: function direct(fromPoint, toPoint, offset) {
    return 'M ' + (fromPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ' + ('L ' + (toPoint[0] + offset) + ',' + (toPoint[1] + offset));
  },
  rectilinear: function rectilinear(fromPoint, toPoint, offset, anchor) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    var cmds = 'M ' + (fromPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ';
    if (anchor === 'horizontal') {
      cmds += 'L ' + (midPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ' + ('L ' + (midPoint[0] + offset) + ',' + (toPoint[1] + offset) + ' ');
    } else {
      cmds += 'L ' + (fromPoint[0] + offset) + ',' + (midPoint[1] + offset) + ' ' + ('L ' + (toPoint[0] + offset) + ',' + (midPoint[1] + offset) + ' ');
    }
    cmds += 'L ' + (toPoint[0] + offset) + ',' + (toPoint[1] + offset);
    return cmds;
  }
};

var findTarget = function findTarget(target) {
  if (typeof target === 'string') {
    return document.getElementById(target);
  }
  return findDOMNode(target);
};

var Diagram = function (_Component) {
  _inherits(Diagram, _Component);

  function Diagram() {
    var _temp, _this, _ret;

    _classCallCheck(this, Diagram);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { height: 0, width: 0 }, _this.svgRef = React.createRef(), _this.onResize = function () {
      var _this$state = _this.state,
          connectionPoints = _this$state.connectionPoints,
          width = _this$state.width,
          height = _this$state.height;

      var svg = findDOMNode(_this.svgRef.current);
      if (svg) {
        var rect = svg.getBoundingClientRect();
        if (rect.width !== width || rect.height !== height) {
          _this.setState({
            width: rect.width,
            height: rect.height,
            connectionPoints: undefined
          });
        } else if (!connectionPoints) {
          _this.placeConnections();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Diagram.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  Diagram.prototype.componentDidUpdate = function componentDidUpdate() {
    this.onResize();
  };

  Diagram.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  Diagram.prototype.placeConnections = function placeConnections() {
    var connections = this.props.connections;

    var containerRect = findDOMNode(this.svgRef.current).getBoundingClientRect();
    var connectionPoints = connections.map(function (_ref) {
      var anchor = _ref.anchor,
          fromTarget = _ref.fromTarget,
          toTarget = _ref.toTarget;

      var points = void 0;
      var fromElement = findTarget(fromTarget);
      var toElement = findTarget(toTarget);
      if (!fromElement) {
        console.warn('Diagram cannot find ' + fromTarget);
      }
      if (!toElement) {
        console.warn('Diagram cannot find ' + toTarget);
      }

      if (fromElement && toElement) {
        var fromRect = fromElement.getBoundingClientRect();
        var toRect = toElement.getBoundingClientRect();
        // There is no x and y when unit testing.
        var fromPoint = [fromRect.x - containerRect.x || 0, fromRect.y - containerRect.y || 0];
        var toPoint = [toRect.x - containerRect.x || 0, toRect.y - containerRect.y || 0];
        if (anchor === 'vertical') {
          fromPoint[0] += fromRect.width / 2;
          toPoint[0] += toRect.width / 2;
          if (fromRect.y < toRect.y) {
            fromPoint[1] += fromRect.height;
          } else {
            toPoint[1] += toRect.height;
          }
        } else if (anchor === 'horizontal') {
          fromPoint[1] += fromRect.height / 2;
          toPoint[1] += toRect.height / 2;
          if (fromRect.x < toRect.x) {
            fromPoint[0] += fromRect.width;
          } else {
            toPoint[0] += toRect.width;
          }
        } else {
          // center
          fromPoint[0] += fromRect.width / 2;
          fromPoint[1] += fromRect.height / 2;
          toPoint[0] += toRect.width / 2;
          toPoint[1] += toRect.height / 2;
        }
        points = [fromPoint, toPoint];
      }

      return points;
    });
    this.setState({ connectionPoints: connectionPoints });
  };

  Diagram.prototype.render = function render() {
    var _props = this.props,
        connections = _props.connections,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['connections', 'theme']);

    var _state = this.state,
        connectionPoints = _state.connectionPoints,
        height = _state.height,
        width = _state.width;


    var paths = void 0;
    if (connectionPoints) {
      paths = connections.map(function (_ref2, index) {
        var anchor = _ref2.anchor,
            color = _ref2.color,
            offset = _ref2.offset,
            round = _ref2.round,
            thickness = _ref2.thickness,
            type = _ref2.type,
            connectionRest = _objectWithoutProperties(_ref2, ['anchor', 'color', 'offset', 'round', 'thickness', 'type']);

        var path = void 0;
        var cleanedRest = _extends({}, connectionRest);
        delete cleanedRest.fromTarget;
        delete cleanedRest.toTarget;
        var points = connectionPoints[index];
        if (points) {
          var offsetWidth = offset ? parseMetricToNum(theme.global.edgeSize[offset]) : 0;
          var d = COMMANDS[type || 'curved'](points[0], points[1], offsetWidth, anchor);
          var strokeWidth = thickness ? parseMetricToNum(theme.global.edgeSize[thickness] || thickness) : 1;

          path = React.createElement('path', _extends({
            key: index
          }, cleanedRest, {
            stroke: colorForName(color || 'accent-1', theme),
            strokeWidth: strokeWidth,
            strokeLinecap: round ? 'round' : 'butt',
            strokeLinejoin: round ? 'round' : 'miter',
            fill: 'none',
            d: d
          }));
        }

        return path;
      });
    }

    return React.createElement(
      StyledDiagram,
      _extends({
        ref: this.svgRef,
        viewBox: '0 0 ' + width + ' ' + height,
        preserveAspectRatio: 'xMinYMin meet'
      }, rest),
      React.createElement(
        'g',
        null,
        paths
      )
    );
  };

  return Diagram;
}(Component);

Diagram.defaultProps = { connections: [] };


var DiagramDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  DiagramDoc = require('./doc').doc(Diagram); // eslint-disable-line global-require
}
var DiagramWrapper = compose(withTheme)(DiagramDoc || Diagram);

export { DiagramWrapper as Diagram };