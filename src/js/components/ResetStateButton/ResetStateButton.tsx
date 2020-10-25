import React from 'react';
import { ReactComponent as ResetIcon } from '@/images/reset.svg';
import styles from './ResetStateButton.module.scss';
import { SendFn } from '@/js/models/xstate.models';

// TODO: declare better types for 'eventType'
type ResetStateButtonProps = {
  send: SendFn;
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
