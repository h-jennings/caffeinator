import React from 'react';
import { ReactComponent as ResetIcon } from '@/images/reset.svg';
import styles from './ResetStateButton.module.scss';

// TODO: declare better types for 'send' and 'eventType'
type ResetStateButtonProps = {
  send: (x: any) => any;
  eventType: any;
};

export function ResetStateButton({ send, eventType }: ResetStateButtonProps) {
  return (
    <button
      type='button'
      onClick={() => send(eventType)}
      className={styles.btn}
    >
      <ResetIcon />
    </button>
  );
}
