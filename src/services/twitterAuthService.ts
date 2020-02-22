import { TWITTER_SERVICE_API, fetchService } from './api';

const TWITTER_AUTH_URL = `${TWITTER_SERVICE_API}/auth`;

const twitterAuthService = async () => {
  await fetchService(
    TWITTER_AUTH_URL,
    { method: 'GET', mode: 'no-cors' },
  );
};

export default twitterAuthService;
