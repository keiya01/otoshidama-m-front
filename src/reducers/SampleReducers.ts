import { Reducer } from 'redux';
import { SampleActions } from '../actions/SampleActions';
import { ActionTypes } from '../actions/RootActions';

export type SampleState = {
  text: string;
};

const InitSampleState: SampleState = {
  text: 'Welcome to redux',
};

const SampleReducers: Reducer<SampleState, SampleActions> = (
  state = InitSampleState,
  action: SampleActions,
): SampleState => {
  switch (action.type) {
    case ActionTypes.SAMPLE_ACTION: {
      return {
        text: action.payload.text,
      };
    }
    default:
      return state;
  }
};

export default SampleReducers;
