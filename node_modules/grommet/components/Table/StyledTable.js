'use strict';

exports.__esModule = true;
exports.StyledTable = exports.StyledTableFooter = exports.StyledTableHeader = exports.StyledTableBody = exports.StyledTableRow = exports.StyledTableDataCaption = exports.StyledTableCell = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var sizeStyle = (0, _styledComponents.css)(['width:', ';max-width:', ';overflow:hidden;'], function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
}, function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
});

var StyledTableCell = exports.StyledTableCell = _styledComponents2.default.td.withConfig({
  displayName: 'StyledTable__StyledTableCell',
  componentId: 'sc-1m3u5g-0'
})(['margin:0;padding:0;font-weight:inherit;text-align:inherit;height:inherit;', ' ', ' ', ' ', ''], function (props) {
  return props.size && sizeStyle;
}, function (props) {
  return props.verticalAlign && 'vertical-align: ' + props.verticalAlign + ';';
}, function (props) {
  return !props.verticalAlign && props.tableContext === 'header' && 'vertical-align: bottom;';
}, function (props) {
  return !props.verticalAlign && props.tableContext === 'footer' && 'vertical-align: top;';
});

var StyledTableDataCaption = exports.StyledTableDataCaption = _styledComponents2.default.caption.withConfig({
  displayName: 'StyledTable__StyledTableDataCaption',
  componentId: 'sc-1m3u5g-1'
})(['display:none;']);

var StyledTableRow = exports.StyledTableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'StyledTable__StyledTableRow',
  componentId: 'sc-1m3u5g-2'
})(['']);

var StyledTableBody = exports.StyledTableBody = _styledComponents2.default.tbody.withConfig({
  displayName: 'StyledTable__StyledTableBody',
  componentId: 'sc-1m3u5g-3'
})(['']);

var StyledTableHeader = exports.StyledTableHeader = _styledComponents2.default.thead.withConfig({
  displayName: 'StyledTable__StyledTableHeader',
  componentId: 'sc-1m3u5g-4'
})(['']);

var StyledTableFooter = exports.StyledTableFooter = _styledComponents2.default.tfoot.withConfig({
  displayName: 'StyledTable__StyledTableFooter',
  componentId: 'sc-1m3u5g-5'
})(['']);

var StyledTable = exports.StyledTable = _styledComponents2.default.table.withConfig({
  displayName: 'StyledTable',
  componentId: 'sc-1m3u5g-6'
})(['border-spacing:0;border-collapse:collapse;', ''], function (props) {
  return props.theme.table && props.theme.table.extend;
});