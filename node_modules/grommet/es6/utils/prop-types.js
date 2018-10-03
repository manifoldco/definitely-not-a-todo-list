import { PropTypes } from 'react-desc';

export var a11yTitlePropType = PropTypes.string.description('Custom title to be used by screen readers.');

export var backgroundPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  color: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.oneOf(['weak', 'medium', 'strong']), PropTypes.bool])
})]).description('Background color');