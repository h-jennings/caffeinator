import React from 'react';
import { FlexContainer } from '@components/FlexContainer/FlexContainer';
import { MachineButton } from '@components/MachineButton/MachineButton';
import gif from '../../../../images/jerry.gif';
import { ImageContainer } from '@components/ImageContainer/ImageContainer';
import { SendFn } from '@/js/models/xstate.models';

// TODO: declare better types for 'send'
type DoneStateProps = {
  send: SendFn;
};

export function DoneState({ send }: DoneStateProps) {
  return (
    <>
      <h1>Finished.</h1>
      <ImageContainer src={gif} />
      <FlexContainer>
        <MachineButton send={send} eventType='RESET'>
          Reset
        </MachineButton>
      </FlexContainer>
    </>
  );
}
