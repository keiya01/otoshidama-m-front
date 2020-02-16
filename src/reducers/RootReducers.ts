import { combineReducers } from 'redux';
import SampleReducers from './SampleReducers';

const RootReducer = combineReducers({
  SampleReducers,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
