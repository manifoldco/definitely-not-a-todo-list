'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var doc = exports.doc = function doc(Tab) {
  var DocumentedTab = (0, _reactDesc.describe)(Tab).description('One tab within Tabs.').usage('import { Tab } from \'grommet\';\n<Tab />');

  DocumentedTab.propTypes = {
    title: _reactDesc.PropTypes.string.description('The title of the tab.')
  };

  return DocumentedTab;
};