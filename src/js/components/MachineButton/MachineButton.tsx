import React, { ReactNode } from 'react';
import styles from '@styles/shared/shared.scss';

// TODO: declare better types for 'send' and 'eventType'
type MachineButtonProps = {
  children: ReactNode;
  send: (x: any) => any;
  eventType: any;
};

export function MachineButton({
  children,
  send,
  eventType,
}: MachineButtonProps) {
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
