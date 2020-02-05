import React from 'react';
import PropTypes from 'prop-types';
import styles from './CupSelector.module.scss';

function CupSelector({ send, ratio }) {
  const handleCupSelection = (cupAmount = 1) => {
    const FlOz = cupAmount * 8;
    send({ type: 'CHANGE', fluidOunces: FlOz.toString(), ratio });
  };
  return (
    <div className={styles.cupSelectorContainer}>
      <button className={styles.cupSelectorBtn} type="button" onClick={() => handleCupSelection(1)}>1</button>
      <button className={styles.cupSelectorBtn} type="button" onClick={() => handleCupSelection(2)}>2</button>
      <button className={styles.cupSelectorBtn} type="button" onClick={() => handleCupSelection(3)}>3</button>
      <button className={styles.cupSelectorBtn} type="button" onClick={() => handleCupSelection(4)}>4</button>
      <button className={styles.cupSelectorBtn} type="button" onClick={() => handleCupSelection(5)}>5</button>
    </div>
  );
}

CupSelector.propTypes = {
  send: PropTypes.func.isRequired,
  ratio: PropTypes.number.isRequired,
};

export default CupSelector;
