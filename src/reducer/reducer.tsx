import { combineReducers, Reducer } from 'redux';
import { SampleActionType, SampleAction } from '../actions/SampleAction';
import Actions from '../actions/actions';
import { SampleState } from '../store/store';

const InitSampleState: SampleState = {
  text: 'Welcome to redux',
};

const SampleReducer: Reducer<SampleState, SampleActionType> = (
  state = InitSampleState,
  action: SampleActionType,
): SampleState => {
  switch (action.type) {
    case Actions.SAMPLE_ACTION: {
      const sampleAction: SampleAction = action;
      return {
        ...state,
        text: sampleAction.payload.text,
      };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  SampleReducer,
});

export default reducer;
