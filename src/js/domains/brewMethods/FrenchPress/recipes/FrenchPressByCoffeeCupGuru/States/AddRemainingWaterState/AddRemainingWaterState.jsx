import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import StateBodyText from '../../../../../../../components/StateBodyText';

function AddRemainingWaterState({ current }) {
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
    </>
  );
}

AddRemainingWaterState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddRemainingWaterState;
