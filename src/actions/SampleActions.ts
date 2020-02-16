export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const sampleAction = (text: string) => ({
  type: SAMPLE_ACTION,
  payload: {
    text,
  },
});

export type SampleActions = ReturnType<typeof sampleAction>;
