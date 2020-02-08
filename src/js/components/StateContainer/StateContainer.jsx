import React from 'react';
import PropTypes from 'prop-types';
import styles from './StateContainer.module.scss';
import MainContainer from '../MainContainer';
import ResetStateButton from '../ResetStateButton';
import MeasurementValueContainer from './MeasurementValueContainer';


function StateContainer({
  children,
  send,
  current,
  eventType,
  headline: name,
}) {
  return (
    <MainContainer headline={name}>
      {
        !current.matches('Start') ? (
          <header className={styles.header}>
            <MeasurementValueContainer current={current} />
            <ResetStateButton send={send} eventType={eventType} />
          </header>
        )
          : null
      }
      <div className={styles.stateContainerContent}>
        {children}
      </div>
    </MainContainer>
  );
}

StateContainer.propTypes = {
  children: PropTypes.node.isRequired,
  send: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StateContainer;
