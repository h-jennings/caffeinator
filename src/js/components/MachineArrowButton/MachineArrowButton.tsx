import React from 'react';
import className from 'classnames';
import { ReactComponent as BackArrow } from '@/images/backArrow.svg';
import styles from './MachineArrowButton.module.scss';
import { SendFn } from '@/js/models/xstate.models';

// TODO: Refactor types to be more specific
type MachineArrowButtonProps = {
  send: SendFn;
  eventType?: any;
};

export function MachineArrowButton({
  send,
  eventType,
}: MachineArrowButtonProps) {
  return (
    <button
      type='button'
      onClick={() => send(eventType)}
      className={className([
        styles.btn,
        {
          [styles.next]: eventType === 'NEXT',
          [styles.prev]: eventType === 'PREV',
        },
      ])}
    >
      <BackArrow width='15' />
    </button>
  );
}
