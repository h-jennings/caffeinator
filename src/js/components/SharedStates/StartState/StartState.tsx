import React, { useRef, useEffect } from 'react';
import { MachineButton } from '@components/MachineButton/MachineButton';
import { RangeSlider } from './RangeSlider';
import CupSelector from './CupSelector';
import { FlexContainer } from '@components/FlexContainer/FlexContainer';
import useScrollToTop from '@/js/utils/global/useScrollToTop';
import UnitsContainer from './UnitsContainer';
import { Current, SendFn } from '@/js/models/xstate.models';

type StartStateProps = {
  send: SendFn;
  current: Current;
  ratio: number;
};

export function StartState({ send, current, ratio }: StartStateProps) {
  useScrollToTop();
  const rangeRef = useRef<HTMLInputElement>(null);
  const handleRangeChange = (): void => {
    if (rangeRef.current) {
      send({ type: 'CHANGE', fluidOunces: rangeRef.current.value, ratio });
    }
  };

  // Synchronizes the value of the range input to the state machine context
  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.value = current.context.fluidOunces;
    }
  }, [current.context.fluidOunces]);

  return (
    <>
      <CupSelector send={send} ratio={ratio} current={current} />
      <UnitsContainer current={current} />
      <RangeSlider ref={rangeRef} handleRangeChange={handleRangeChange} />
      <FlexContainer>
        <MachineButton send={send} eventType='NEXT'>
          Make Coffee
        </MachineButton>
      </FlexContainer>
    </>
  );
}
