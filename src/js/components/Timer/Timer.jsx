/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.module.scss';
import toTimeString from '../../utils/toTimeString';

function Timer({ ms, current = {}, send }) {
  const root = document.documentElement;

  useEffect(() => {
    // ! Update --progress-percent variable
    if (current.context.remaining_ms === undefined) return;

    root.style.setProperty('--progress-percent', `${581.2 - (current.context.remaining_ms / ms) * 581.2}`);

    return () => root.style.removeProperty('--progress-percent');
  }, [current.context.remaining_ms, ms, root]);

  return (
    <>
      <div className={styles.progressContainer}>
        <h2 className={styles.timerText}>
          {
            ((current.context.remaining_ms
              && toTimeString(current.context.remaining_ms))
              || toTimeString(ms))
          }
        </h2>
        <svg className={styles.progress} viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient gradientTransform="rotate(30)" id="linearGradient">
              <stop stopColor="#FFB959" offset="0%" />
              <stop stopColor="#FF9F1C" offset="100%" />
            </linearGradient>
          </defs>
          <g id="timer-icon">
            <circle stroke="#FF9F1C" fill="none" cx="100" cy="100" r="92.5" strokeWidth="5" strokeLinecap="round" />
            <circle className={styles.progressPath} stroke="url(#linearGradient)" fill="none" cx="100" cy="100" r="92.5" strokeWidth="15" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      <button
        type="button"
        onClick={() => send('RESUME')}
      >
        RESUME
      </button>
      <button
        type="button"
        onClick={() => send('PAUSE')}
      >
        PAUSE
      </button>
    </>
  );
}
Timer.propTypes = {
  ms: PropTypes.number.isRequired,
  current: PropTypes.objectOf(PropTypes.any),
  send: PropTypes.func,
};

export default Timer;
