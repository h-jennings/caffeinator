import React, { ReactNode } from 'react';
import styles from '@styles/shared/shared.scss';
import { SendFn } from '@/js/models/xstate.models';

// TODO: declare better types for 'send' and 'eventType'
type MachineButtonProps = {
  children: ReactNode;
  send: SendFn;
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
