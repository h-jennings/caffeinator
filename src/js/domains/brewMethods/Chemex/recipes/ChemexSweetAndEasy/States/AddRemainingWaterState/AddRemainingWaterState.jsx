import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import sharedStyles from '@styles/shared/shared.scss';
import { StateBodyText } from '@components/StateBodyText/StateBodyText';
import { roundToNearestTenth } from '@/js/utils/global/roundToNearestTenth';
import { Timer } from '@components/Timer/Timer';

function AddRemainingWaterState({ current, send }) {
  const [floz, setFloz] = useState(null);

  useEffect(() => {
    setFloz(roundToNearestTenth(current.context.fluidOunces * 0.86));
  }, [current.context.fluidOunces]);
  return (
    <>
      <h1>
        Pour Remaining {current.fluidOuncesDisplayValue}
        Water
      </h1>
      <StateBodyText>
        <span className={sharedStyles.yellowTxt}>
          {floz}
          oz.
        </span>
      </StateBodyText>
      <Timer
        current={current}
        send={send}
        ms={150000}
        timerName='addWaterTimer'
      />
    </>
  );
}

AddRemainingWaterState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  send: PropTypes.func.isRequired,
};

export default AddRemainingWaterState;
