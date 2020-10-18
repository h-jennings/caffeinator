import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from '../../FlexContainer';
import MachineButton from '../../MachineButton';
import gif from '../../../../images/jerry.gif';
import ImageContainer from '../../ImageContainer';

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
