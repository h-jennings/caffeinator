import React, { ReactNode } from 'react';
import styles from './StateContainer.module.scss';
import { MainContainer } from '@components/MainContainer/MainContainer';
import { ResetStateButton } from '@components/ResetStateButton/ResetStateButton';
import { MeasurementValueContainer } from '@components/MeasurementValueContainer/MeasurementValueContainer';
import { FlexContainer } from '@components/FlexContainer/FlexContainer';
import { MachineArrowButton } from '@components/MachineArrowButton/MachineArrowButton';

// TODO: Refactor types 'send' and 'current' to be more specific
type StateContainerProps = {
  children: ReactNode;
  send: (x: any) => any;
  current: any;
  headline: string;
  temp: number;
  forwardBackBtns: boolean;
};

export function StateContainer({
  children,
  send,
  current,
  headline: name,
  temp,
  forwardBackBtns,
}: StateContainerProps) {
  return (
    <MainContainer headline={name}>
      {!current.matches('Start') ? (
        <header className={styles.header}>
          <MeasurementValueContainer current={current} temp={temp} />
          <ResetStateButton send={send} eventType='RESET' />
        </header>
      ) : null}
      <div>
        {children}
        {!forwardBackBtns ? null : (
          <FlexContainer>
            <MachineArrowButton send={send} eventType='PREV' />
            <MachineArrowButton send={send} eventType='NEXT' />
          </FlexContainer>
        )}
      </div>
    </MainContainer>
  );
}
