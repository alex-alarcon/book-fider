import React from 'react';
import PropTypes from 'prop-types';

function Image({ classes, src, alt, ...rest }) {
  return <img className={classes} src={src} alt={alt} {...rest} />;
}

Image.propTypes = {
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  classes: 'rounded-lg w-16 h-20',
};

export default Image;
