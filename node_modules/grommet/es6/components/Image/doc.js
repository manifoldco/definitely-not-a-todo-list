import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export var doc = function doc(Image) {
  var DocumentedImage = describe(Image).availableAt(getAvailableAtBadge('Image')).description('An image.').usage('import { Image } from \'grommet\';\n<Image/>');

  DocumentedImage.propTypes = {
    fit: PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.')
  };

  return DocumentedImage;
};