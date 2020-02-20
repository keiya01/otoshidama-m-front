import { combineReducers } from 'redux';
import SampleReducers from './SampleReducers';
import TwitterAuthReducer from './TwitterAuthReducer';

const RootReducer = combineReducers({
  SampleReducers,
  twitterAuth: TwitterAuthReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
