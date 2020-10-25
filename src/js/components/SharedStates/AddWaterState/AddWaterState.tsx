import React from 'react';
import classNames from 'classnames';
import sharedStyles from '@styles/shared/shared.scss';
import { StateBodyText } from '@components/StateBodyText/StateBodyText';

type AddWaterStateProps = {
  current: any;
};

export function AddWaterState({ current }: AddWaterStateProps) {
  return (
    <>
      <h1>Add Water</h1>
      <StateBodyText>
        Add{' '}
        <span
          className={classNames([
            sharedStyles.yellowTxt,
            sharedStyles.underlineDotted,
          ])}
        >
          {current.context.fluidOuncesDisplayValue} floz.
        </span>{' '}
        of water to the carafe.
      </StateBodyText>
    </>
  );
}
