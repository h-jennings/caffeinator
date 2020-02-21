import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageContainer.module.scss';

function ImageContainer({ src }) {
  return (
    <div
      className={styles.imgContainer}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageContainer;
