'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var doc = exports.doc = function doc(Collapsible) {
  var DocumentedCollapsible = (0, _reactDesc.describe)(Collapsible).description('A react component that expand/collapse animation.').usage('import { Collapsible } from \'grommet\';\n<Collapsible open={true}>test</Collapsible>');

  DocumentedCollapsible.propTypes = {
    open: _reactDesc.PropTypes.bool.description('Whether or not the component should be open.')
  };

  return DocumentedCollapsible;
};