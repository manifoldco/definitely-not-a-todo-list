'use strict';

exports.__esModule = true;
exports.StyledImage = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIT_MAP = {
  cover: 'cover',
  contain: 'contain'
};

var fitStyle = (0, _styledComponents.css)(['flex:1 1;overflow:hidden;object-fit:', ';'], function (props) {
  return FIT_MAP[props.fit];
});

var StyledImage = exports.StyledImage = _styledComponents2.default.img.withConfig({
  displayName: 'StyledImage',
  componentId: 'ey4zx9-0'
})(['', ' ', ''], function (props) {
  return props.fit && fitStyle;
}, function (props) {
  return props.theme.image && props.theme.image.extend;
});