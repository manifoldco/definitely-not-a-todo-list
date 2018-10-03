'use strict';

exports.__esModule = true;
exports.StyledText = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    var margin = props.theme.global.edgeSize[props.margin];
    return '\n      margin-top: ' + margin + ';\n      margin-bottom: ' + margin + ';\n      margin-left: ' + margin + ';\n      margin-right: ' + margin + ';\n    ';
  }
  if (props.margin.vertical) {
    return '\n      margin-top: ' + props.theme.global.edgeSize[props.margin.vertical] + ';\n      margin-bottom: ' + props.theme.global.edgeSize[props.margin.vertical] + ';\n    ';
  }
  if (props.margin.horizontal) {
    return '\n      margin-left: ' + props.theme.global.edgeSize[props.margin.horizontal] + ';\n      margin-right: ' + props.theme.global.edgeSize[props.margin.horizontal] + ';\n    ';
  }
  if (props.margin.top) {
    return 'margin-top: ' + props.theme.global.edgeSize[props.margin.top] + ';';
  }
  if (props.margin.bottom) {
    return 'margin-bottom: ' + props.theme.global.edgeSize[props.margin.bottom] + ';';
  }
  if (props.margin.left) {
    return 'margin-left: ' + props.theme.global.edgeSize[props.margin.left] + ';';
  }
  if (props.margin.right) {
    return 'margin-right: ' + props.theme.global.edgeSize[props.margin.right] + ';';
  }
  return '';
};

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.text[size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = (0, _styledComponents.css)(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var truncateStyle = '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n';

var colorStyle = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return (0, _utils.colorForName)(props.colorValue, props.theme);
});

var weightStyle = (0, _styledComponents.css)(['font-weight:', ';'], function (props) {
  return props.weight;
});

var StyledText = exports.StyledText = _styledComponents2.default.span.withConfig({
  displayName: 'StyledText',
  componentId: 'sc-1sadyjn-0'
})(['', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorValue && colorStyle;
}, function (props) {
  return props.weight && weightStyle;
}, function (props) {
  return props.theme.text && props.theme.text.extend;
});