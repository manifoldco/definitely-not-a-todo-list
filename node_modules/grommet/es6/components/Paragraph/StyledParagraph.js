import styled, { css } from 'styled-components';

import { colorForName } from '../../utils';

var colorStyle = css(['color:', ';'], function (props) {
  return colorForName(props.color, props.theme);
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
  return css(['font-size:', ';line-height:', ';max-width:', ';'], data.size, data.height, data.maxWidth);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = css(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

export var StyledParagraph = styled.p.withConfig({
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