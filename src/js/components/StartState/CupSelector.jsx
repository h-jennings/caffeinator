import React from 'react';
import styles from './StartState.module.scss';

function CupSelector({ send }) {
  const handleCupSelection = (cupAmount = 1) => {
    const FlOz = cupAmount * 8;
    send({ type: 'CHANGE', fluidOunces: FlOz.toString() });
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

export default CupSelector;
