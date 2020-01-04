import React from 'react';
import styles from '../../../styles/shared/shared.scss';

function Button({ children }) {
  return (
    <button
      type="button"
      className={styles.btnBase}
    >
      {children}
    </button>
  );
}

export default Button;
