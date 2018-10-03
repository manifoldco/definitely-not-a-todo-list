'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge'];

var ANIMATION_TYPE = _reactDesc.PropTypes.oneOf(['fadeIn', 'fadeOut', 'jiggle', 'pulse', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'zoomIn', 'zoomOut']);
var ANIMATION_SHAPE = _reactDesc.PropTypes.shape({
  type: ANIMATION_TYPE,
  delay: _reactDesc.PropTypes.number,
  duration: _reactDesc.PropTypes.number,
  size: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
});

var doc = exports.doc = function doc(Box) {
  var DocumentedBox = (0, _reactDesc.describe)(Box).availableAt((0, _utils.getAvailableAtBadge)('Box')).description('A flexible box that lays out its contents along a single direction.').usage("import { Box } from 'grommet';\n<Box />");
  DocumentedBox.propTypes = {
    a11yTitle: _utils.a11yTitlePropType,
    align: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']).description('How to align the contents along the cross axis.'),
    alignContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents when there is extra space in\n        the cross axis.').defaultValue('stretch'),
    alignSelf: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description('How to align along the cross axis when contained in\n        a Box or along the column axis when contained in a Grid.'),
    animation: _reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([ANIMATION_TYPE, ANIMATION_SHAPE]))]).description('Animation effect(s) to use. \'duration\' and \'delay\' should\n        be in milliseconds. \'jiggle\' and \'pulse\' types are intended for\n        small elements, like icons.'),
    background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      dark: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.string]),
      image: _reactDesc.PropTypes.string,
      position: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool]),
      light: _reactDesc.PropTypes.string
    })]).description('Either a color identifier to use for the background\n        color. For example: \'neutral-1\'. Or, a \'url()\' for an image. Dark\n        is not needed if color is provided.'),
    basis: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4', 'auto']), _reactDesc.PropTypes.string]).description('A fixed or relative size along its container\'s main axis.'),
    border: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
        dark: _reactDesc.PropTypes.string,
        light: _reactDesc.PropTypes.string
      })]),
      side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string])
    })]).description('Include a border.'),
    direction: _reactDesc.PropTypes.oneOf(['row', 'column', 'row-responsive']).description('The orientation to layout the child components in.').defaultValue('column'),
    elevation: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('Elevated height above the underlying context, indicated\n        via a drop shadow.').defaultValue('none'),
    flex: _reactDesc.PropTypes.oneOf(['grow', 'shrink', true, false]).description('Whether flex-grow and/or flex-shrink is true.'),
    fill: _reactDesc.PropTypes.oneOf(['horizontal', 'vertical', true, false]).description('Whether the width and/or height should fill the container.'),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The amount of spacing between child elements. This\n        should not be used in conjunction with \'wrap\' as the gap elements\n        will not wrap gracefully.'),
    gridArea: _reactDesc.PropTypes.string.description('The name of the area to place\n      this Box in inside a parent Grid.'),
    height: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('A fixed height.'),
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'between', 'end']).description('How to align the contents along the main axis.'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      horizontal: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      left: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      right: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      vertical: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description('The amount of margin around the box. An object can\n        be specified to distinguish horizontal margin, vertical margin, and\n        margin on a particular side of the box'),
    overflow: _reactDesc.PropTypes.oneOf(['auto', 'hidden', 'scroll', 'visible']).description('box overflow.'),
    pad: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
    }), _reactDesc.PropTypes.string]).description('The amount of padding around the box contents. An\n        object can be specified to distinguish horizontal padding, vertical\n        padding, and padding on a particular side of the box'),
    responsive: _reactDesc.PropTypes.bool.description('Whether margin, pad, and border\n      sizes should be scaled for mobile environments.').defaultValue(true),
    round: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']), _reactDesc.PropTypes.string]).description('How much to round the corners.'),
    tag: _reactDesc.PropTypes.string.description('The DOM tag to use for the element.').defaultValue('div'),
    width: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('A fixed width.'),
    wrap: _reactDesc.PropTypes.bool.description('Whether children can wrap if they\n      can\'t all fit.')
  };
  return DocumentedBox;
};