import { Current, SendFn } from '@/js/models/xstate.models';
import React from 'react';
import { Timer } from '@components/Timer/Timer';

// TODO: declare better types for 'current' and 'send'
type StirStateProps = {
  send: SendFn;
  current: Current;
  ms: number;
};

export function StirState({ send, current, ms }: StirStateProps) {
  return (
    <>
      <h1>Stir</h1>
      <Timer ms={ms} send={send} current={current} timerName='stirTimer' />
    </>
  );
}
