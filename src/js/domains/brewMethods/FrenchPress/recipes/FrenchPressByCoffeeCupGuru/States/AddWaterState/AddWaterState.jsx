import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import StateBodyText from '../../../../../../../components/StateBodyText';

function AddWaterState({ current }) {
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
    </>
  );
}

AddWaterState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddWaterState;
