import { EventData, EventObject, State, AnyEventObject } from 'xstate';

export type SendFn = (
  event: string | AnyEventObject,
  payload?: EventData,
) => State<any, EventObject, any, any>;

export type Current = State<any, EventObject, any, any>;
