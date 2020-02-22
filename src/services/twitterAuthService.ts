import { TWITTER_SERVICE_API, fetchService } from './api';

const TWITTER_AUTH_URL = `${TWITTER_SERVICE_API}/en/d/point`;

type Map = Record<string, string>;

const parseQueryParam = (url: string): Map => {
  const element = url.split('?');
  const res: Map = {};
  if (element.length !== 2) return res;
  element[1].split('&').forEach((v) => {
    const buf = v.split('=');
    if (buf.length !== 2) {
      res[buf[0]] = '';
      return;
    }
    const key = buf[0];
    const value = buf[1];
    res[key] = value;
  });
  return res;
};

const twitterAuthService = async () => {
  const res = await fetchService(
    TWITTER_AUTH_URL,
    { method: 'GET', mode: 'cors' },
  );
  const params = parseQueryParam(res.url);
  window.localStorage.setItem('access_token', params.accessToken);
};

export default twitterAuthService;
