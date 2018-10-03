'use strict';

exports.__esModule = true;
exports.StyledParagraph = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorStyle = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return (0, _utils.colorForName)(props.color, props.theme);
});

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    var margin = props.theme.global.edgeSize[props.margin];
    return '\n      margin-top: ' + margin + ';\n      margin-bottom: ' + margin + ';\n    ';
  }
  if (props.margin.top) {
    return 'margin-top: ' + props.theme.global.edgeSize[props.margin.top] + ';';
  }
  if (props.margin.bottom) {
    return 'margin-bottom: ' + props.theme.global.edgeSize[props.margin.bottom] + ';';
  }
  return '';
};

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.paragraph[size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';max-width:', ';'], data.size, data.height, data.maxWidth);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = (0, _styledComponents.css)(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var StyledParagraph = exports.StyledParagraph = _styledComponents2.default.p.withConfig({
  displayName: 'StyledParagraph',
  componentId: 'tbetod-0'
})(['', ' ', ' ', ' ', ' ', ''], function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.color && colorStyle;
}, function (props) {
  return props.theme.paragraph && props.theme.paragraph.extend;
});