import React from 'react';
import classNames from 'classnames';
import sharedStyles from '@styles/shared/shared.scss';
import { StateBodyText } from '@components/StateBodyText/StateBodyText';
import { Current } from '@/js/models/xstate.models';

export function AddRemainingWaterState({ current }: { current: Current }) {
  return (
    <>
      <h1>Add Remaining Water</h1>
      <StateBodyText>
        Add remaining{' '}
        <span
          className={classNames([
            sharedStyles.yellowTxt,
            sharedStyles.underlineDotted,
          ])}
        >
          {current.context.fluidOunces / 2} floz.
        </span>{' '}
        of water to the carafe.
      </StateBodyText>
    </>
  );
}
