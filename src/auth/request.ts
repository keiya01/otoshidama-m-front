import * as request from 'request';

const MICRO_SERVICE_BASE_ENDPOINT = '/en/d/point';
const APP_SERVER_BASE_ENDPOINT = '/en/d/point';

const getOptions = (
  url: string,
  headers: object,
  qs: object,
) => ({
  url,
  headers,
  qs,
  json: true,
});

const saveTokenToLocalStorage = (accessToken: string) => {
  window.localStorage.setItem('access_token', accessToken);
};

const getItemFromLocalStorage = (key: string): string => {
  const value = window.localStorage.getItem(key);
  return value === null ? '' : value;
};

export const requestToMicroService = (
  setError: (err: any) => void,
) => {
  request.get(
    getOptions(MICRO_SERVICE_BASE_ENDPOINT, {}, {}),
    (err, _, body) => {
      if (err) {
        setError(err);
        return;
      }
      saveTokenToLocalStorage(body.accessToken);
    },
  );
};

export const requestToAppServer = (
  callback: (result: any) => void,
  setError: (err: any) => void,
) => {
  request.get(
    getOptions(
      APP_SERVER_BASE_ENDPOINT,
      { token: getItemFromLocalStorage('access_token') },
      {},
    ),
    (err, res, body) => {
      if (res.statusCode !== 404) {
        setError(err);
        return;
      }
      const result = body;
      callback(result);
    },
  );
};
