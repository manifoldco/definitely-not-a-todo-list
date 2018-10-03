'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Select) {
  var DocumentedSelect = (0, _reactDesc.describe)(Select).availableAt((0, _utils.getAvailableAtBadge)('Select')).description('An select-like field with optional search capability.').usage('import { Select } from \'grommet\';\n<Select />');

  DocumentedSelect.propTypes = {
    a11yTitle: _utils.a11yTitlePropType,
    children: _reactDesc.PropTypes.func.description('Function that will be called when each option is rendered.'),
    closeOnChange: _reactDesc.PropTypes.bool.description('Wether to close the drop when a selection is made.').defaultValue(true),
    disabled: _reactDesc.PropTypes.bool.description('Whether the select should be disabled.'),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop.').defaultValue({
      top: 'top',
      left: 'left'
    }),
    dropTarget: _reactDesc.PropTypes.object.description('Target where the options drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the Select itself by default.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether when \'plain\' it should receive a focus outline.'),
    messages: _reactDesc.PropTypes.shape({
      multiple: _reactDesc.PropTypes.string
    }).description('Custom messages.'),
    multiple: _reactDesc.PropTypes.bool.description('Whether to allow multiple options to be selected.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user selects an option.'),
    onClose: _reactDesc.PropTypes.func.description('Function that will be called when the Select drop closes.'),
    onSearch: _reactDesc.PropTypes.func.description('Function that will be called when the user types in the search input.\n      If this property is not provided, no search field will be rendered.'),
    options: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object])).description('Options can be either a string or an object. If an object is used, use\n      children callback in order to render anything based on the current item.').isRequired,
    placeholder: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Placeholder text to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Select input with no border or padding.'),
    searchPlaceholder: _reactDesc.PropTypes.string.description('Placeholder text to use in the search box when the search input is empty.'),
    selected: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)]).description('Index of the currently selected option. When multiple, the set of\n      options selected. This property is required when multiple.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the select.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.object]))]).description('Currently selected value. This can be an array\n      when multiple. Passing an element allows the caller to control how\n      the value is rendered.')
  };

  return DocumentedSelect;
};