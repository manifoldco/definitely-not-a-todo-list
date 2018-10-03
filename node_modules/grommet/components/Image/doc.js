'use strict';

exports.__esModule = true;
exports.doc = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var doc = exports.doc = function doc(Image) {
  var DocumentedImage = (0, _reactDesc.describe)(Image).availableAt((0, _utils.getAvailableAtBadge)('Image')).description('An image.').usage('import { Image } from \'grommet\';\n<Image/>');

  DocumentedImage.propTypes = {
    fit: _reactDesc.PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.')
  };

  return DocumentedImage;
};