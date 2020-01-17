import React from 'react';
import PropTypes from 'prop-types';
import styles from './DoneState.module.scss';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineButton from '../../../../../../../components/MachineButton';

function DoneState({ send }) {
  return (
    <>
      <h1>Finished.</h1>
      <h2>Enjoy!</h2>
      <FlexContainer>
        <MachineButton send={send} eventType="RESET">
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
