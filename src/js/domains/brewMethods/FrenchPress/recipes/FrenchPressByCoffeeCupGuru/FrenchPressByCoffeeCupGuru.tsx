import React from 'react';
import { useMachine } from '@xstate/react';
import { FrenchPressByCoffeeCupGuruMachine } from './FrenchPressByCoffeeCupGuruMachine';
import { AddRemainingWaterState } from './States/AddRemainingWaterState/AddRemainingWaterState';
import { StartState } from '@components/SharedStates/StartState/StartState';
import { GrindState } from '@components/SharedStates/GrindState/GrindState';
import { StirState } from '@components/SharedStates/StirState/StirState';
import { AddWaterState } from '@components/SharedStates/AddWaterState/AddWaterState';
import { BrewState } from '@components/SharedStates/BrewState/BrewState';
import { DoneState } from '@components/SharedStates/DoneState/DoneState';
import { StateContainer } from '@components/StateContainer/StateContainer';
import { Recipe } from '@/data/methods.model';

type FrenchPressByCoffeeCupGuruProps = {
  pageRecipe: Recipe;
};

export default function FrenchPressByCoffeeCupGuru({
  pageRecipe,
}: FrenchPressByCoffeeCupGuruProps) {
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
