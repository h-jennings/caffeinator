import React from 'react';
import classNames from 'classnames';
import sharedStyles from '../../../../styles/shared/shared.scss';
import { StateBodyText } from '@components/StateBodyText/StateBodyText';
import { GrindRanges } from '@/data/methods.model';

// TODO: declare better types for 'current'
type GrindStateProps = {
  current: any;
  grindRange: GrindRanges;
};

export function GrindState({ current, grindRange }: GrindStateProps) {
  return (
    <>
      <h1>Grind</h1>
      <StateBodyText>
        Grind{' '}
        <span
          className={classNames([
            sharedStyles.yellowTxt,
            sharedStyles.underlineDotted,
          ])}
        >
          {current.context.grams}g
        </span>{' '}
        of beans to a{' '}
        <span
          className={classNames([
            sharedStyles.yellowTxt,
            sharedStyles.underlineDotted,
          ])}
        >
          {grindRange}
        </span>{' '}
        consistency.
      </StateBodyText>
    </>
  );
}
