'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(DropButton) {
  var DocumentedDropButton = (0, _reactDesc.describe)(DropButton).availableAt((0, _utils.getAvailableAtBadge)('DropButton')).description('A Button that when clicked will a Drop with the specified \'dropContent\'.\n      When opened, the drop will control the focus so that the contents behind\n      it are not focusable. All properties of Button can be passed through.\n      ').usage('import { DropButton } from \'grommet\';\n<DropButton dropContent={...} />');

  DocumentedDropButton.propTypes = {
    a11yTitle: _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.'),
    disabled: _reactDesc.PropTypes.bool.description('Whether the button should be disabled.'),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop with respect to the button.').defaultValue({
      top: 'top',
      left: 'left'
    }),
    dropContent: _reactDesc.PropTypes.element.description('Content to put inside the Drop.').isRequired,
    dropTarget: _reactDesc.PropTypes.object.description('Target where the drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the DropButton itself by default.'),
    onClose: _reactDesc.PropTypes.func.description('Callback for when the drop is closed'),
    onOpen: _reactDesc.PropTypes.func.description('Callback for when the drop is opened'),
    open: _reactDesc.PropTypes.bool.description('Whether the drop should be open or not. Setting this property does not\n      influence user interaction after it has been rendered.')
  };

  return DocumentedDropButton;
};