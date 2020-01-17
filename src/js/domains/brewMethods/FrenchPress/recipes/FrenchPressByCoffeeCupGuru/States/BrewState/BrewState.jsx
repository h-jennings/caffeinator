import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
// import styles from './Brew.module.scss';
// import sharedStyles from '../../../../../../../../styles/shared/shared.scss';

function BrewState({ send }) {
  return (
    <>
      <>
        <h1>Brew</h1>
        <FlexContainer>
          <MachineArrowButton send={send} eventType="PREV" />
          <MachineArrowButton send={send} eventType="NEXT" />
        </FlexContainer>
      </>
    </>
  );
}

BrewState.propTypes = {
  send: PropTypes.func.isRequired,
};

export default BrewState;
