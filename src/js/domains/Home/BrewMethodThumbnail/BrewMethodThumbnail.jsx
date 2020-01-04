import React from 'react';
import styles from './BrewMethodThumbnail.module.scss';

function BrewMethodThumbnail({ data }) {
  const { type, icon } = data;

  return (
    <li className={styles.container}>
      <h3 className={styles.headline}>{type}</h3>
      <img className={styles.icon} src={icon.src} alt="" style={{ width: `${icon.width}`, height: `${icon.height}` }} />
    </li>
  );
}

export default BrewMethodThumbnail;
