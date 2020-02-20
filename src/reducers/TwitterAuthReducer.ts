import { Reducer } from 'redux';
import { TwitterAuthActions } from '../actions/TwitterAuthActions';
import { User } from '../types/user';

export type TwitterAuthState = {
  user?: User;
  isLogin: boolean;
};

const TwitterAuthState: TwitterAuthState = {
  isLogin: false,
};

const TwitterAuthReducers: Reducer<TwitterAuthState, TwitterAuthActions> = (
  state = TwitterAuthState,
  action: TwitterAuthActions,
): TwitterAuthState => {
  switch (action.type) {
    case 'SUCCESS_TWITTER_AUTH':
      return {
        user: action.user,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default TwitterAuthReducers;
