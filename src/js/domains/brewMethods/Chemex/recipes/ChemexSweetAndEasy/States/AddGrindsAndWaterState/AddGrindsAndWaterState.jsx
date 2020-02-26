import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sharedStyles from '../../../../../../../../styles/shared/shared.scss';
import StateBodyText from '../../../../../../../components/StateBodyText';

function AddGrindsAndWaterState({ current }) {
  return (
    <>
      <h1>Add Grinds and Water</h1>
      <StateBodyText>
        Add
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {current.context.grams}
          g
        </span>
        {' '}
        of beans and
        {' '}
        <span className={classNames([sharedStyles.yellowTxt, sharedStyles.underlineDotted])}>
          {current.context.fluidOuncesDisplayValue}
          floz.
        </span>
        {' '}
        of water to the chemex.
      </StateBodyText>
    </>
  );
}

AddGrindsAndWaterState.propTypes = {
  current: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddGrindsAndWaterState;
