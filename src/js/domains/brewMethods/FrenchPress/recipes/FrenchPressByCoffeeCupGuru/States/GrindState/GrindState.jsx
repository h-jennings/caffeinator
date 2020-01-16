import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineButton from '../../../../../../../components/MachineButton';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';

function GrindState({ current, send, grindRange }) {
  return (
    <>
      <h1>Grind</h1>
      <h2>
        Grind
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {current.context.grams}
          g
        </span>
        {' '}
        of beans to a
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>{grindRange}</span>
        {' '}
        consistency.
      </h2>
      <FlexContainer>
        <MachineButton send={send} eventType="NEXT">
          Next
        </MachineButton>
      </FlexContainer>
    </>
  );
}

GrindState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  send: PropTypes.func.isRequired,
  grindRange: PropTypes.string.isRequired,
};

export default GrindState;
