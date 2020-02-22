const MICRO_SERVICE_BASE_ENDPOINT = '/en/d/point';
const NODE_SERVER_BASE_ENDPOINT = 'http://test.oring/en/d/point';

const saveTokenToLocalStorage = (accessToken: string) => {
  window.localStorage.setItem('access_token', accessToken);
};

const getItemFromLocalStorage = (key: string): string => {
  const value = window.localStorage.getItem(key);
  return value === null ? '' : value;
};

type Map = { [key: string]: string };

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

const api = (
  url: string,
  options: RequestInit,
): Promise<Response> => fetch(url, options)
  .then((res) => res)
  .catch((err) => {
    throw new Error(err);
  });

const getMicroServiceOptions = (): RequestInit => ({
  method: 'GET',
});

const getNodeServiceOptions = (token: string): RequestInit => ({
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const postNodeServiceOptions = (token: string, body: string): RequestInit => ({
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
  },
  body,
});

export const requestToMicroService = (
  setError: (err: any) => void,
) => {
  api(
    MICRO_SERVICE_BASE_ENDPOINT,
    getMicroServiceOptions(),
  ).then((res) => {
    const params = parseQueryParam(res.url);
    saveTokenToLocalStorage(params.accessToken);
  }).catch((err) => {
    setError(err);
  });
};

export const requestToAppServer = <T>(
  callback: (result: any) => void,
  setError: (err: any) => void,
  body: T,
) => {
  api(
    NODE_SERVER_BASE_ENDPOINT,
    postNodeServiceOptions(
      getItemFromLocalStorage('access_token'),
      JSON.stringify(body),
    ),
  ).then((res) => {
    callback(res);
  }).catch(() => {
    setError('リクエストに失敗しました');
  });
};
