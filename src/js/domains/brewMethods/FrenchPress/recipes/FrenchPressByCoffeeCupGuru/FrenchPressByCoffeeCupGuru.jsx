import React from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import { AnimatePresence, motion } from 'framer-motion';
import FrenchPressByCoffeeCupGuruMachine from './FrenchPressByCoffeeCupGuruMachine';
import MainContainer from '../../../../../components/MainContainer';
import MachineButton from '../../../../../components/MachineButton';
import ResetStateButton from '../../../../../components/ResetStateButton';
import StartState from './States/StartState';
import GrindState from './States/GrindState';
import AddWaterState from './States/AddWaterState';
import AddRemainingWater from './States/AddRemainingWater';
import StirState from './States/StirState';
import BrewState from './States/BrewState';


function FrenchPressByCoffeeCupGuru({ pageRecipe }) {
  // Initialize Recipe State Machine
  const [current, send] = useMachine(FrenchPressByCoffeeCupGuruMachine);
  const { name, ratio, grindRange } = pageRecipe;

  return (
    <MainContainer headline={name}>
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
              return <StirState send={send} />;

            case current.matches('Add_Remaining_Water'):
              return <AddRemainingWater send={send} current={current} />;

            case current.matches('Brew'):
              return <BrewState send={send} current={current} />;

            case current.matches('Done'):
              return (
                <>
                  <AnimatePresence exitBeforeEnter>
                    <motion.h1 initial="initial" exit="exit" key={current.value} animate="enter">Done</motion.h1>
                  </AnimatePresence>
                  <MachineButton send={send} eventType="RESET">Reset</MachineButton>
                </>
              );

            default:
              return null;
          }
        })()
      }
    </MainContainer>
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
