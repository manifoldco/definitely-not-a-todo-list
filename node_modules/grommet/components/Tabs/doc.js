'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Tabs) {
  var DocumentedTabs = (0, _reactDesc.describe)(Tabs).availableAt((0, _utils.getAvailableAtBadge)('Tabs')).description('A tabular view component.').usage('import { Tabs, Tab } from \'grommet\';\n<Tabs>\n  <Tab title=\'Tab 1\'>...</Tab>\n  <Tab title=\'Tab 2\'>...</Tab>\n</Tabs>');

  DocumentedTabs.propTypes = {
    activeIndex: _reactDesc.PropTypes.number.description('Active tab index. If specified, Tabs will be a controlled component. This means that future\ntab changes will not work unless you subscribe to onActive function and update activeIndex\naccordingly.'),
    children: _reactDesc.PropTypes.node.description('Array of Tab.').isRequired,
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the tabs along the main axis.').defaultValue('center'),
    messages: _reactDesc.PropTypes.shape({
      tabContents: _reactDesc.PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    }),
    onActive: _reactDesc.PropTypes.func.description('Function that will be called with the active tab index when the currently active\ntab changes.')
  };
  return DocumentedTabs;
};