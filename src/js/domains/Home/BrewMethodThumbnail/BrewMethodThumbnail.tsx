import { BrewMethod } from '@/data/methods.model';
import React from 'react';
import styles from './BrewMethodThumbnail.module.scss';

type BrewMethodThumbnail = {
  data: BrewMethod;
};

export function BrewMethodThumbnail({ data }: BrewMethodThumbnail) {
  const { type, icon } = data;
  return (
    <li className={styles.container}>
      <h3 className={styles.headline}>{type}</h3>
      <div className={styles.iconContainer}>
        <img
          className={styles.icon}
          src={icon.src}
          alt=""
          style={{ width: `${icon.width}`, height: `${icon.height}` }}
        />
      </div>
    </li>
  );
}
