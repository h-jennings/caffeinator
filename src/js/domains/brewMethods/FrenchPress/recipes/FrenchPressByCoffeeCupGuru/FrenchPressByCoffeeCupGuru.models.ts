export type FrenchPressByCoffeeCupGuruMachineState = {
  states: {
    Start: {};
    Grind: {};
    Add_Water: {};
    Stir: {};
    Add_Remaining_Water: {};
    Brew: {};
    Done: {};
  };
};

export type FrenchPressByCoffeeCupGuruMachineEvent =
  | { type: 'CHANGE' }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'TIMER_UPDATED' }
  | { type: 'TIMER_STATE_UPDATED' }
  | { type: 'RESET' }
  | { type: 'RESUME' }
  | { type: 'PAUSE' };

export type FrenchPressByCoffeeCupGuruMachineContext = {
  fluidOunces: number;
  fluidOuncesDisplayValue: number | null;
  grams: number;
  stirTimer: any;
  remaining_ms?: number;
  timerButtonState: 'pause' | 'play';
  brewTimer: any;
};
