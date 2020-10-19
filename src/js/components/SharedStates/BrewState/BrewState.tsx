import React from 'react';
import Timer from '../../Timer';

// TODO: declare better types for 'send' and 'current'
type BrewStateProps = {
  send: (x: any) => any;
  current: any;
  ms: number;
};

export function BrewState({ send, current, ms }: BrewStateProps) {
  return (
    <>
      <h1>Brew</h1>
      <Timer ms={ms} send={send} current={current} timerName='brewTimer' />
    </>
  );
}
