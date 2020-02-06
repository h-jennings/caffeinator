import React from 'react';
import PropTypes from 'prop-types';
import styles from './StateContainer.module.scss';
import MainContainer from '../MainContainer';
import ResetStateButton from '../ResetStateButton';


function StateContainer({
  children,
  send,
  eventType,
  headline: name,
}) {
  return (
    <MainContainer headline={name}>
      <ResetStateButton send={send} eventType={eventType} />
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
};

export default StateContainer;
