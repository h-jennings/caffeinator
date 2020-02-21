import React from 'react';
import PropTypes from 'prop-types';
import styles from './StateContainer.module.scss';
import MainContainer from '../MainContainer';
import ResetStateButton from '../ResetStateButton';
import MeasurementValueContainer from '../MeasurementValueContainer';
import FlexContainer from '../FlexContainer';
import MachineArrowButton from '../MachineArrowButton';


function StateContainer({
  children,
  send,
  current,
  headline: name,
  temp,
  forwardBackBtns,
}) {
  return (
    <MainContainer headline={name}>
      {
        !current.matches('Start') ? (
          <header className={styles.header}>
            <MeasurementValueContainer
              current={current}
              temp={temp}
            />
            <ResetStateButton send={send} eventType="RESET" />
          </header>
        )
          : null
      }
      <div className={styles.stateContainerContent}>
        {children}
        {!forwardBackBtns ? null : (
          <FlexContainer>
            <MachineArrowButton send={send} eventType="PREV" />
            <MachineArrowButton send={send} eventType="NEXT" />
          </FlexContainer>
        )}
      </div>
    </MainContainer>
  );
}

StateContainer.propTypes = {
  children: PropTypes.node.isRequired,
  send: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  forwardBackBtns: PropTypes.bool.isRequired,
};

export default StateContainer;
