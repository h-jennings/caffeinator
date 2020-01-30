import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import Timer from '../../../../../../../components/Timer';
// import styles from './Brew.module.scss';
// import sharedStyles from '../../../../../../../../styles/shared/shared.scss';

function BrewState({ send, current }) {
  return (
    <>
      <h1>Brew</h1>
      <Timer ms={240000} send={send} current={current} />
      <FlexContainer>
        <MachineArrowButton send={send} eventType="PREV" />
        <MachineArrowButton send={send} eventType="NEXT" />
      </FlexContainer>
    </>
  );
}

BrewState.propTypes = {
  send: PropTypes.func.isRequired,
};

export default BrewState;
