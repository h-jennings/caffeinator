import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { ReactComponent as BackArrow } from '../../../images/backArrow.svg';
import styles from './MachineArrowButton.module.scss';

function MachineArrowButton({ send, eventType }) {
  return (
    <button
      type="button"
      onClick={() => send(eventType)}
      className={className([styles.btn, {
        [styles.next]: eventType === 'NEXT',
        [styles.prev]: eventType === 'PREV',
      }])}
    >
      <BackArrow width="15" />
    </button>
  );
}

MachineArrowButton.propTypes = {
  send: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
};

export default MachineArrowButton;
