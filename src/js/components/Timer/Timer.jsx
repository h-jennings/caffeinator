/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './Timer.module.scss';
import toTimeString from '../../utils/toTimeString';
import { ReactComponent as PlaySvg } from '../../../images/play.svg';
import { ReactComponent as PauseSvg } from '../../../images/pause.svg';
import timerButtonStates from '../../utils/timerButtonStates';

// TODO:
// - Clean up play-pause button logic (at least naming)

function Timer({ ms, current = {}, send }) {
  useEffect(() => {
    if (current.context.remaining_ms === undefined) return;

    const root = document.documentElement;

    // Set --progress-percent value to the circumference minus percentage of progress every 1000ms
    root.style.setProperty('--progress-percent', `${581.2 - (current.context.remaining_ms / ms) * 581.2}`);

    return () => root.style.removeProperty('--progress-percent');
  }, [current.context.remaining_ms, ms]);

  function handlePlayPauseButton() {
    switch (true) {
      case current.context.timerButtonState === timerButtonStates.play:
        send('RESUME');
        break;
      default:
        send('PAUSE');
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
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
          <button
            type="button"
            onClick={handlePlayPauseButton}
            className={styles.timerBtn}
          >
            <PlaySvg className={className({
              [styles.play]: true,
              [styles.visible]: current.context.timerButtonState === timerButtonStates.play,
              [styles.hidden]: current.context.timerButtonState === timerButtonStates.pause,
            })}
            />
            <PauseSvg className={className({
              [styles.pause]: true,
              [styles.visible]: current.context.timerButtonState === timerButtonStates.pause,
              [styles.hidden]: current.context.timerButtonState === timerButtonStates.play,
            })}
            />
          </button>
        </div>
      </div>
    </>
  );
}
Timer.propTypes = {
  ms: PropTypes.number.isRequired,
  current: PropTypes.objectOf(PropTypes.any),
  send: PropTypes.func,
};

export default Timer;
