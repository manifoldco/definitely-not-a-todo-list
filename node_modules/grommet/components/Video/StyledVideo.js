'use strict';

exports.__esModule = true;
exports.StyledVideoScrubber = exports.StyledVideoControls = exports.StyledVideoContainer = exports.StyledVideo = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};

var fitStyle = (0, _styledComponents.css)(['flex:1 1;min-height:0;object-fit:', ';'], function (props) {
  return FIT_MAP[props.fit];
});

var StyledVideo = exports.StyledVideo = _styledComponents2.default.video.withConfig({
  displayName: 'StyledVideo',
  componentId: 'w4v8h9-0'
})(['max-width:100%;', '::cue{background:', ';}', ''], function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.video.captions.background;
}, function (props) {
  return props.theme.video && props.theme.video.extend;
});

var StyledVideoContainer = exports.StyledVideoContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledVideo__StyledVideoContainer',
  componentId: 'w4v8h9-1'
})(['flex:1 1;display:flex;flex-direction:column;overflow:hidden;position:relative;']);

var positionStyle = (0, _styledComponents.css)(['position:absolute;left:0;right:0;bottom:0;']);

var StyledVideoControls = exports.StyledVideoControls = _styledComponents2.default.div.withConfig({
  displayName: 'StyledVideo__StyledVideoControls',
  componentId: 'w4v8h9-2'
})(['flex:0 0;', ' opacity:0;transition:opacity 0.3s;', ''], function (props) {
  return props.over && positionStyle;
}, function (props) {
  return props.active ? 'opacity: 1;' : 'pointer-events: none';
});

var headStyle = (0, _styledComponents.css)(['::after{content:\'\';height:100%;width:', ';background:', ';position:absolute;left:', ';}'], function (props) {
  return props.theme.global.edgeSize.xsmall;
}, function (props) {
  return (0, _utils.colorForName)('light-5', props.theme);
}, function (props) {
  return props.value + '%';
});

var StyledVideoScrubber = exports.StyledVideoScrubber = _styledComponents2.default.div.withConfig({
  displayName: 'StyledVideo__StyledVideoScrubber',
  componentId: 'w4v8h9-3'
})(['cursor:pointer;', ''], function (props) {
  return props.value && headStyle;
});