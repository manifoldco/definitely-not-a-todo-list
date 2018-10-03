import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export var doc = function doc(Carousel) {
  var DocumentedCarousel = describe(Carousel).availableAt(getAvailableAtBadge('Carousel')).description('A carousel that cycles through children. Child components\n      would typically be Images. It is the caller\'s responsibility to ensure\n      that all children are the same size.').usage('import { Carousel } from \'grommet\';\n<Carousel />');

  DocumentedCarousel.propTypes = {
    fill: PropTypes.bool.description('Whether to expand to fill\n      all of the available width and height in the parent container.'),
    play: PropTypes.number.description('If specified, the number of\n      milliseconds between automatically transitioning to the next child. It\n      will loop through all children indefinitely.')
  };

  return DocumentedCarousel;
};