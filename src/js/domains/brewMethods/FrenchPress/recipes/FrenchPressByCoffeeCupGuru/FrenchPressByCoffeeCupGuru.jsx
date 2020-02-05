import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import FrenchPressByCoffeeCupGuruMachine from './FrenchPressByCoffeeCupGuruMachine';
import MainContainerHeadlineOuter from '../../../../../components/MainContainerHeadlineOuter';
import ResetStateButton from '../../../../../components/ResetStateButton';
import AddRemainingWaterState from './States/AddRemainingWaterState';
import StartState from './States/StartState';
import GrindState from './States/GrindState';
import AddWaterState from './States/AddWaterState';
import StirState from './States/StirState';
import BrewState from './States/BrewState';
import DoneState from './States/DoneState/DoneState';


function FrenchPressByCoffeeCupGuru({ pageRecipe }) {
  // Initialize Recipe State Machine
  const [current, send] = useMachine(FrenchPressByCoffeeCupGuruMachine);
  const { name, ratio, grindRange } = pageRecipe;

  return (
    <MainContainerHeadlineOuter headline={name}>
      <ResetStateButton send={send} eventType="RESET" />
      {
        (() => {
          switch (true) {
            case current.matches('Start'):
              return <StartState current={current} send={send} ratio={ratio} />;

            case current.matches('Grind'):
              return <GrindState current={current} send={send} grindRange={grindRange} />;

            case current.matches('Add_Water'):
              return <AddWaterState current={current} send={send} />;

            case current.matches('Stir'):
              return <StirState send={send} current={current} />;

            case current.matches('Add_Remaining_Water'):
              return <AddRemainingWaterState send={send} current={current} />;

            case current.matches('Brew'):
              return <BrewState send={send} current={current} />;

            case current.matches('Done'):
              return <DoneState send={send} />;

            default:
              return null;
          }
        })()
      }
    </MainContainerHeadlineOuter>
  );
}

FrenchPressByCoffeeCupGuru.propTypes = {
  pageRecipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ratio: PropTypes.number.isRequired,
    grindRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default FrenchPressByCoffeeCupGuru;
