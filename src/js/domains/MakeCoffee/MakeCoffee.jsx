import React, { useContext } from 'react';
import CaffeinatorMachineContext from '../../context/CaffeinatorMachineContext';
import MachineButton from '../../components/MachineButton';

function MakeCoffee() {
  const { current, send } = useContext(CaffeinatorMachineContext);
  return (
    <>
      <h1>Grind Beans</h1>
      <MachineButton
        eventType="PREV"
        send={send}
      >
        Back
      </MachineButton>
      <MachineButton
        eventType="NEXT"
        send={send}
      >
        Next
      </MachineButton>
      <p style={{ color: 'white' }}>{JSON.stringify(current.context)}</p>
    </>
  );
}

export default MakeCoffee;
