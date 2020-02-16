import { combineReducers } from 'redux';
import SampleReducers, { SampleState } from './SampleReducers';

export type RootState = SampleState;

const RootReducer = combineReducers({
  SampleReducers,
});

export default RootReducer;
