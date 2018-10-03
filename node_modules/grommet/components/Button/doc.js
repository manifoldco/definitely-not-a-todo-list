'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Button) {
  var DocumentedButton = (0, _reactDesc.describe)(Button).availableAt((0, _utils.getAvailableAtBadge)('Button')).description('A button. We have a separate component from the browser base so we can style it.').usage('import { Button } from \'grommet\';\n<Button primary={true} label=\'Label\' />');

  DocumentedButton.propTypes = {
    a11yTitle: _reactDesc.PropTypes.string.description('Custom title to be used by screen readers.'),
    active: _reactDesc.PropTypes.bool.description('Whether the button is active.'),
    color: _reactDesc.PropTypes.string.description('Fill color for primary, border color otherwise.'),
    fill: _reactDesc.PropTypes.bool.description('Whether the button expands to fill all of the available width and height.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether when \'plain\' it should receive a focus outline.').defaultValue(true),
    hoverIndicator: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['background']), _reactDesc.PropTypes.shape({
      background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.string])
    })]).description('The hover indicator to apply when the user is mousing over the\nbutton. An object can be also be specified for color index support:\n{background: \'neutral-2\'}. This prop is meant to be used only\nwith plain Buttons.'),
    href: _reactDesc.PropTypes.string.description('If specified, the button will behave like an anchor tag.'),
    icon: _reactDesc.PropTypes.element.description('Icon element to place in the button.'),
    label: _reactDesc.PropTypes.node.description('Label text to place in the button.'),
    onClick: _reactDesc.PropTypes.func.description('Click handler. Not setting this property and not specifying a href\ncauses the Button to be disabled.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain button with no border or padding.'),
    primary: _reactDesc.PropTypes.bool.description('Whether this is a primary button. There should be at most one per page or screen.'),
    reverse: _reactDesc.PropTypes.bool.description('Whether an icon and label should be reversed so that the icon is at the\nend of the anchor.'),
    type: _reactDesc.PropTypes.oneOf(['button', 'reset', 'submit']).description('The type of button. Set the type to submit for the default button on forms.').defaultValue('button')
  };

  return DocumentedButton;
};