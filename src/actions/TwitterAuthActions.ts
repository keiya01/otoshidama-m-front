import { User } from '../types/user';

export const SUCCESS_TWITTER_AUTH = 'SUCCESS_TWITTER_AUTH';
export const twitterAuthAction = (user: User) => ({
  type: SUCCESS_TWITTER_AUTH,
  user,
} as const);


export type TwitterAuthActions = ReturnType<typeof twitterAuthAction>;
