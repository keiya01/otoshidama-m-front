import { Reducer } from 'react';
import { SampleActions, SAMPLE_ACTION } from '../actions/SampleActions';

const InitSampleState: SampleState = {
  text: 'Welcome to redux',
};

export type SampleState = {
  text: string;
};

const SampleReducers: Reducer<SampleState, SampleActions> = (
  state = InitSampleState,
  action: SampleActions,
): SampleState => {
  switch (action.type) {
    case SAMPLE_ACTION: {
      const sampleAction: SampleActions = action;
      return {
        ...state,
        text: sampleAction.payload.text,
      };
    }
    default:
      return state;
  }
};

export default SampleReducers;
