import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import PerfectFrenchPressCoffeeMachine from './PerfectFrenchPressCoffeeMachine';
import { StateContainer } from '@components/StateContainer/StateContainer';
import { StartState } from '@components/SharedStates/StartState/StartState';
import { GrindState } from '@components/SharedStates/GrindState/GrindState';
import { AddWaterState } from '@components/SharedStates/AddWaterState/AddWaterState';
import { StirState } from '@components/SharedStates/StirState/StirState';
import BloomState from './States/BloomState';
import AddRemainingWaterState from './States/AddRemainingWaterState';
import { BrewState } from '@components/SharedStates/BrewState/BrewState';
import { DoneState } from '@components/SharedStates/DoneState/DoneState';

function PerfectFrenchPressCoffee({ pageRecipe }) {
  const [current, send] = useMachine(PerfectFrenchPressCoffeeMachine);

  const { name, ratio, temp, grindRange } = pageRecipe;
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

          case current.matches('Bloom'):
            return (
              <StateContainer
                headline={name}
                send={send}
                current={current}
                temp={temp}
                forwardBackBtns
              >
                <BloomState current={current} send={send} />
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
                <StirState current={current} send={send} ms={10000} />
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
                <BrewState current={current} send={send} ms={240000} />
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

PerfectFrenchPressCoffee.propTypes = {
  pageRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    grindRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default PerfectFrenchPressCoffee;
