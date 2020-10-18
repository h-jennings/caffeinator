import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@components/FlexContainer/FlexContainer';
import { MachineButton } from '@components/MachineButton/MachineButton';
import gif from '../../../../images/jerry.gif';
import { ImageContainer } from '@components/ImageContainer/ImageContainer';

function DoneState({ send }) {
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

DoneState.propTypes = {
  send: PropTypes.func.isRequired,
};

export default DoneState;
