'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Stack) {
  var DocumentedStack = (0, _reactDesc.describe)(Stack).availableAt((0, _utils.getAvailableAtBadge)('Stack')).description('Stacks components on top of the first child component.').usage('import { Stack } from \'grommet\';\n<Stack />');

  DocumentedStack.propTypes = {
    anchor: _reactDesc.PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']).description('Where to anchor children from. If not specified, children\n      fill the guiding child\'s area.'),
    fill: _reactDesc.PropTypes.bool.description('Whether to expand to fill\n      all of the available width and height in the parent container.'),
    guidingChild: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.oneOf(['first', 'last'])]).description('Which child to guide layout from. All other children\n      will be positioned within that area. Defaults to \'first\'.').defaultValue('first')
  };

  return DocumentedStack;
};