import React from 'react';
import styles from '../../../styles/shared/shared.scss';

function MachineButton({ children, send, eventType }) {
  return (
    <button
      type='button'
      className={styles.btnBase}
      onClick={() => send(eventType)}
    >
      {children}
    </button>
  );
}

export default MachineButton;
