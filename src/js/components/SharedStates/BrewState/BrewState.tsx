import { Current, SendFn } from '@/js/models/xstate.models';
import React from 'react';
import Timer from '../../Timer';

// TODO: declare better types for 'send' and 'current'
type BrewStateProps = {
  send: SendFn;
  current: Current;
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
