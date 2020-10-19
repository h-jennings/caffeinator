import React from 'react';
import Timer from '../../Timer';

// TODO: declare better types for 'current' and 'send'
type StirStateProps = {
  send: (x: any) => any;
  current: any;
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
