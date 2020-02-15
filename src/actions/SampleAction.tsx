import { Action } from 'redux';
import Actions from './actions';

export interface SampleAction extends Action {
  type: Actions.SAMPLE_ACTION;
  payload: {
    text: string;
  };
}

export type SampleActionType = SampleAction;

export const sampleAction = (text: string): SampleAction => ({
  type: Actions.SAMPLE_ACTION,
  payload: {
    text,
  },
});
