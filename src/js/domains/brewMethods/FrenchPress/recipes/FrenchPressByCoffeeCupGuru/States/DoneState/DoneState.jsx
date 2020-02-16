import React from 'react';
import PropTypes from 'prop-types';
import styles from './DoneState.module.scss';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineButton from '../../../../../../../components/MachineButton';
import gif from '../../../../../../../../images/jerry.gif';

function DoneState({ send }) {
  return (
    <>
      <h1>Finished.</h1>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${gif})`,
        }}
      />
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
