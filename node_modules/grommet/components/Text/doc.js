'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Text) {
  var DocumentedText = (0, _reactDesc.describe)(Text).availableAt((0, _utils.getAvailableAtBadge)('Text')).description('Arbitrary text.').usage('import { Text } from \'grommet\';\n<Text />');

  DocumentedText.propTypes = {
    color: _reactDesc.PropTypes.string.description('A color identifier to use for the text color. For example:\n\'status-critical\'.'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large']), _reactDesc.PropTypes.string]),
      top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large']), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description('The amount of margin above and/or below the heading. An object can be\nspecified to distinguish top margin and bottom margin.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description('The font size is primarily driven by the chosen tag. But, it can\nbe adjusted via this size property. The tag should be set for semantic\ncorrectness and accessibility. This size property allows for stylistic\nadjustments.'),
    tag: _reactDesc.PropTypes.string.description('The DOM tag to use for the element.').defaultValue('span'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the component.'),
    truncate: _reactDesc.PropTypes.bool.description('Restrict the text to a single line and truncate with ellipsis if it\nis too long to all fit.'),
    weight: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['normal', 'bold']), _reactDesc.PropTypes.number]).description('Font weight')
  };

  return DocumentedText;
};