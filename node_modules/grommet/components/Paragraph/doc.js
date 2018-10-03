'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Paragraph) {
  var DocumentedParagraph = (0, _reactDesc.describe)(Paragraph).availableAt((0, _utils.getAvailableAtBadge)('Paragraph')).description('A paragraph of text.').usage('import { Paragraph } from \'grommet\';\n<Paragraph />');

  DocumentedParagraph.propTypes = {
    color: _reactDesc.PropTypes.string.description('A color identifier to use for the text color. For example:\n\'status-critical\'.'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large']), _reactDesc.PropTypes.string]),
      top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large']), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description('The amount of margin above and/or below the paragraph. An object can be\nspecified to distinguish top margin and bottom margin.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the Paragraph text.').defaultValue('medium'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the paragraph.')
  };

  return DocumentedParagraph;
};