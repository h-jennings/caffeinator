import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import StateBodyText from '../../../../../../../components/StateBodyText/StateBodyText';

function GrindState({ current, grindRange }) {
  return (
    <>
      <h1>Grind</h1>
      <StateBodyText>
        Grind
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {current.context.grams}
          g
        </span>
        {' '}
        of beans to a
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {grindRange}
        </span>
        {' '}
        consistency.
      </StateBodyText>
    </>
  );
}

GrindState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  grindRange: PropTypes.string.isRequired,
};

export default GrindState;
