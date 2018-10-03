'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(TextArea) {
  var DocumentedTextArea = (0, _reactDesc.describe)(TextArea).availableAt((0, _utils.getAvailableAtBadge)('TextArea')).description('A textarea.').usage('import { TextArea } from \'grommet\';\n<TextArea id=\'item\' name=\'item\' />');

  DocumentedTextArea.propTypes = {
    id: _reactDesc.PropTypes.string.description('The id attribute of the textarea.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether the plain textarea should receive a focus outline.'),
    name: _reactDesc.PropTypes.string.description('The name attribute of the textarea.'),
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain textarea with no border or padding.\nOnly use this when the containing context provides sufficient affordance.'),
    value: _reactDesc.PropTypes.string.description('What text to put in the textarea.')
  };

  return DocumentedTextArea;
};