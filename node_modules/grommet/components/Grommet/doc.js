'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Grommet) {
  var DocumentedGrommet = (0, _reactDesc.describe)(Grommet).availableAt((0, _utils.getAvailableAtBadge)('Grommet')).description('This is the top level Grommet container.').usage('import { Grommet } from \'grommet\';\n<Grommet>...</Grommet>');

  DocumentedGrommet.propTypes = {
    full: _reactDesc.PropTypes.bool.description('Whether to take the whole viewport.'),
    theme: _reactDesc.PropTypes.object.description('Custom styles for Grommet app component.')
  };

  return DocumentedGrommet;
};