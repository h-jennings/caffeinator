import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import FrenchPressByCoffeeCupGuruMachine from './FrenchPressByCoffeeCupGuruMachine';
import AddRemainingWaterState from './States/AddRemainingWaterState';
import StartState from '../../../../../components/SharedStates/StartState';
import { GrindState } from '@components/SharedStates/GrindState/GrindState';
import StirState from '../../../../../components/SharedStates/StirState';
import { AddWaterState } from '@components/SharedStates/AddWaterState/AddWaterState';
import { BrewState } from '@components/SharedStates/BrewState/BrewState';
import { DoneState } from '@components/SharedStates/DoneState/DoneState';
import { StateContainer } from '@components/StateContainer/StateContainer';

function FrenchPressByCoffeeCupGuru({ pageRecipe }) {
  // Initialize Recipe State Machine
  const [current, send] = useMachine(FrenchPressByCoffeeCupGuruMachine);
  const { name, temp, ratio, grindRange } = pageRecipe;

  return (
    <>
      {(() => {
        switch (true) {
          case current.matches('Start'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns={false}
              >
                <StartState current={current} send={send} ratio={ratio} />
              </StateContainer>
            );

          case current.matches('Grind'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns
              >
                <GrindState current={current} grindRange={grindRange} />
              </StateContainer>
            );

          case current.matches('Add_Water'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns
              >
                <AddWaterState current={current} />
              </StateContainer>
            );

          case current.matches('Stir'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns
              >
                <StirState send={send} current={current} ms={15000} />
              </StateContainer>
            );

          case current.matches('Add_Remaining_Water'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns
              >
                <AddRemainingWaterState current={current} />
              </StateContainer>
            );

          case current.matches('Brew'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns
              >
                <BrewState send={send} current={current} ms={240000} />
              </StateContainer>
            );

          case current.matches('Done'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns={false}
              >
                <DoneState send={send} />
              </StateContainer>
            );

          default:
            return null;
        }
      })()}
    </>
  );
}

FrenchPressByCoffeeCupGuru.propTypes = {
  pageRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    grindRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default FrenchPressByCoffeeCupGuru;
