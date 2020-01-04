import React, { useRef, useContext } from 'react';
import CaffeinatorMachineContext from '../../context/CaffeinatorMachineContext';
import MachineButton from '../../components/MachineButton';

function Start() {
  const { current, send } = useContext(CaffeinatorMachineContext);
  const rangeRef = useRef(null);
  const handleRangeChange = () => {
    send({ type: 'CHANGE', cupAmount: rangeRef.current.value });
  };

  return (
    <>
      <h1>How Much Would You Like To Make?</h1>
      <input
        ref={rangeRef}
        type="range"
        name="cups"
        min="1"
        max="5"
        step="0.5"
        defaultValue="1"
        id="cups"
        onChange={handleRangeChange}
      />
      <MachineButton
        send={send}
        eventType="MAKE_COFFEE"
      >
        Make Coffee
      </MachineButton>
      <p style={{ color: 'white' }}>{JSON.stringify(current.context)}</p>
    </>
  );
}

export default Start;
