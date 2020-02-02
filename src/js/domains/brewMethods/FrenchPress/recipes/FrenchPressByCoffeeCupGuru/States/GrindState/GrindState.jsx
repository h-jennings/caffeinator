import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import StateBodyText from '../../../../../../../components/StateBodyText/StateBodyText';

function GrindState({ current, send, grindRange }) {
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
      <FlexContainer>
        <MachineArrowButton send={send} eventType="PREV" />
        <MachineArrowButton send={send} eventType="NEXT" />
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
