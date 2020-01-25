import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import Timer from '../../../../../../../components/Timer';
// import styles from './StirState.module.scss';
// import sharedStyles from '../../../../../../../../styles/shared/shared.scss';

function StirState({ send }) {
  return (
    <>
      <h1>Stir</h1>
      <Timer ms={15000} />
      <FlexContainer>
        <MachineArrowButton send={send} eventType="PREV" />
        <MachineArrowButton send={send} eventType="NEXT" />
      </FlexContainer>
    </>
  );
}

StirState.propTypes = {
  send: PropTypes.func.isRequired,
};

export default StirState;
