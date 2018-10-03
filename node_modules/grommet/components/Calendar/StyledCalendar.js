'use strict';

exports.__esModule = true;
exports.StyledDay = exports.StyledDayContainer = exports.StyledWeek = exports.StyledWeeks = exports.StyledWeeksContainer = exports.StyledCalendar = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';width:', ';'], data.fontSize, data.lineHeight, props.theme.global.size[props.size]);
};

var StyledCalendar = exports.StyledCalendar = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar',
  componentId: 'sc-1y4xhmp-0'
})(['', ' ', ''], function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});

var StyledWeeksContainer = exports.StyledWeeksContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledWeeksContainer',
  componentId: 'sc-1y4xhmp-1'
})(['overflow:hidden;', ''], function (props) {
  return 'height: ' + (0, _utils.parseMetricToNum)(props.theme.calendar[props.size].daySize) * 6 + 'px;';
});

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      size = props.size,
      theme = props.theme;
  var _theme$calendar$size = theme.calendar[size],
      daySize = _theme$calendar$size.daySize,
      slideDuration = _theme$calendar$size.slideDuration;

  var amount = (0, _utils.parseMetricToNum)(daySize) * weeks;

  var translateYFrom = direction === 'down' ? '-' + amount + 'px' : '0';
  var translateYTo = direction === 'up' ? '-' + amount + 'px' : '0';
  var slideTransition = (0, _styledComponents.css)(['0%{transform:translateY(', ')}100%{transform:translateY(', ')}'], translateYFrom, translateYTo);
  return (0, _styledComponents.css)(['animation:', ' ', ' forwards;'], (0, _styledComponents.keyframes)(['', ''], slideTransition), slideDuration);
};

var StyledWeeks = exports.StyledWeeks = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledWeeks',
  componentId: 'sc-1y4xhmp-2'
})(['position:relative;', ''], function (props) {
  return props.slide && slideStyle(props);
});

var StyledWeek = exports.StyledWeek = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledWeek',
  componentId: 'sc-1y4xhmp-3'
})(['display:flex;flex-direction:row;flex-justify:between;']);

var StyledDayContainer = exports.StyledDayContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledDayContainer',
  componentId: 'sc-1y4xhmp-4'
})(['flex:0 0 auto;']);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return (0, _styledComponents.css)(['width:', ';height:', ';'], data.daySize, data.daySize);
};

var StyledDay = exports.StyledDay = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledDay',
  componentId: 'sc-1y4xhmp-5'
})(['display:flex;justify-content:center;align-items:center;', ' ', ' ', ' ', ''], function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.isSelected && (0, _utils.backgroundStyle)('brand', props.theme) || props.inRange && (0, _utils.backgroundStyle)({ color: 'brand', opacity: 'weak' }, props.theme);
}, function (props) {
  return props.otherMonth && 'opacity: 0.5;';
}, function (props) {
  return props.isSelected && 'font-weight: bold;';
});