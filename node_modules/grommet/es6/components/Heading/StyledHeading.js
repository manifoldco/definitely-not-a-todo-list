import styled, { css } from 'styled-components';

import { colorForName, palm } from '../../utils';

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    var margin = props.theme.global.edgeSize[props.margin];
    var narrowMargin = props.theme.global.edgeSize.narrow[props.margin];
    return css(['margin-top:', ';margin-bottom:', ';', ''], margin, margin, props.responsive ? palm('\n        margin-top: ' + narrowMargin + ';\n        margin-bottom: ' + narrowMargin + ';\n      ') : '');
  }
  var result = [];
  if (props.margin.top) {
    if (props.margin.top === 'none') {
      result.push(css(['margin-top:0;']));
    } else {
      result.push(css(['margin-top:', ';'], props.theme.global.edgeSize[props.margin.top]));
      if (props.responsive) {
        result.push(palm('margin-top: ' + props.theme.global.edgeSize.narrow[props.margin.top] + ';'));
      }
    }
  }
  if (props.margin.bottom) {
    if (props.margin.bottom === 'none') {
      result.push(css(['margin-bottom:0;']));
    } else {
      result.push(css(['margin-bottom:', ';'], props.theme.global.edgeSize[props.margin.bottom]));
      if (props.responsive) {
        result.push(palm('margin-bottom: ' + props.theme.global.edgeSize.narrow[props.margin.bottom] + ';'));
      }
    }
  }
  return result;
};

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.heading.level[props.level][size];
  var narrowData = props.theme.heading.level[Math.min(props.level + 1, 4)][size];
  return css(['font-size:', ';line-height:', ';max-width:', ';font-weight:', ';', ''], data.size, data.height, data.maxWidth, props.theme.heading.weight, props.responsive ? palm('\n      font-size: ' + narrowData.size + ';\n      line-height: ' + narrowData.height + ';\n      max-width: ' + narrowData.maxWidth + ';\n      font-weight: ' + props.theme.heading.weight + ';\n    ') : '');
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = css(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var truncateStyle = '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n';

var colorStyle = css(['color:', ';'], function (props) {
  return colorForName(props.colorValue, props.theme);
});

export var StyledHeading = styled.h1.withConfig({
  displayName: 'StyledHeading',
  componentId: 'sc-1rdh4aw-0'
})(['', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.theme.heading.font && css(['font-family:', ';'], props.theme.heading.font.family);
}, function (props) {
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
  return props.theme.heading && props.theme.heading.extend;
});