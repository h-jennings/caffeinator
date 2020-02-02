import React from 'react';
import PropTypes from 'prop-types';
import styles from './BrewMethodThumbnail.module.scss';

function BrewMethodThumbnail({ data }) {
  const { type, icon } = data;
  return (
    <li className={styles.container}>
      <h3 className={styles.headline}>{type}</h3>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src={icon.src} alt="" style={{ width: `${icon.width}`, height: `${icon.height}` }} />
      </div>
    </li>
  );
}

BrewMethodThumbnail.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    icon: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};


export default BrewMethodThumbnail;
