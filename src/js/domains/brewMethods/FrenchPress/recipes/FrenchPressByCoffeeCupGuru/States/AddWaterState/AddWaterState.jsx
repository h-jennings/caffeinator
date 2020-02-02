import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import StateBodyText from '../../../../../../../components/StateBodyText';

function AddWaterState({ current, send }) {
  return (
    <>
      <h1>Add Water</h1>
      <StateBodyText>
        Add
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

AddWaterState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
  send: PropTypes.func.isRequired,
};

export default AddWaterState;
