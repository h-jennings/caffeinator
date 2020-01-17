import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlexContainer from '../../../../../../../components/FlexContainer';
import MachineArrowButton from '../../../../../../../components/MachineArrowButton';
import styles from './AddWaterState.module.scss';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';

function AddWaterState({ current, send }) {
  return (
    <>
      <h1>Add Water</h1>
      <h2 className={styles.bodyTxt}>
        Add
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {current.context.fluidOunces / 2}
          {' '}
          floz.
        </span>
        {' '}
        of water to the carafe.
      </h2>
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
