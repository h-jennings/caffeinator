import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import FlexContainer from '../../../../../../../components/FlexContainer';
import StateBodyText from '../../../../../../../components/StateBodyText';

function AddRemainingWaterState({ current, send }) {
  return (
    <>
      <h1>Add Remaining Water</h1>
      <StateBodyText>
        Add remaining
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {current.context.fluidOunces / 2}
          {' '}
          floz.
        </span>
        {' '}
        of water to the carafe.
      </StateBodyText>
      <FlexContainer>
        <MachineArrowButton send={send} eventType="PREV" />
        <MachineArrowButton send={send} eventType="NEXT" />
      </FlexContainer>
    </>
  );
}

AddRemainingWaterState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  send: PropTypes.func.isRequired,
};

export default AddRemainingWaterState;
