import { ActionTypes } from './RootActions';

export const sampleAction = (text: string) => ({
  type: ActionTypes.SAMPLE_ACTION,
  payload: {
    text,
  },
});

export type SampleActions = ReturnType<typeof sampleAction>;
