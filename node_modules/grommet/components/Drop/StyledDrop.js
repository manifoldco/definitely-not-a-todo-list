'use strict';

exports.__esModule = true;
exports.StyledDrop = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTransformOriginStyle(align) {
  var vertical = 'top';
  if (align.bottom) {
    vertical = 'bottom';
  }
  var horizontal = 'left';
  if (align.right) {
    horizontal = 'right';
  }
  return vertical + ' ' + horizontal;
}

var dropKeyFrames = (0, _styledComponents.keyframes)(['0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}']);

var StyledDrop = exports.StyledDrop = _styledComponents2.default.div.withConfig({
  displayName: 'StyledDrop',
  componentId: 'sc-16s5rx8-0'
})(['', ' border-radius:', ';box-shadow:', ';position:fixed;z-index:20;outline:none;', ' opacity:0;transform-origin:', ';animation:', ' 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}', ''], _utils.baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return props.theme.global.drop.shadow[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return (0, _utils.backgroundStyle)(props.theme.global.drop.background, props.theme);
}, function (props) {
  return getTransformOriginStyle(props.align);
}, dropKeyFrames, function (props) {
  return props.theme.global.drop && props.theme.global.drop.extend;
});