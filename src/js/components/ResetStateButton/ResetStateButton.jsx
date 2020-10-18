import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ResetIcon } from '@/images/reset.svg';
import styles from './ResetStateButton.module.scss';

function ResetStateButton({ send, eventType }) {
  return (
    <button
      type='button'
      onClick={() => send(eventType)}
      className={styles.btn}
    >
      <ResetIcon />
    </button>
  );
}

ResetStateButton.propTypes = {
  send: PropTypes.func.isRequired,
  eventType: PropTypes.string.isRequired,
};

export default ResetStateButton;
