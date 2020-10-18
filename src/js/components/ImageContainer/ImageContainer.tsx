import React from 'react';
import styles from './ImageContainer.module.scss';

type ImageContainerProps = {
  src: string;
};

export function ImageContainer({ src }: ImageContainerProps) {
  return (
    <div
      className={styles.imgContainer}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}
