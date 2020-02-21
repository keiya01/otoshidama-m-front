const MICRO_SERVICE_BASE_ENDPOINT = '/en/d/point';
const NODE_SERVER_BASE_ENDPOINT = '/en/d/point';

const saveTokenToLocalStorage = (accessToken: string) => {
  window.localStorage.setItem('access_token', accessToken);
};

const getItemFromLocalStorage = (key: string): string => {
  const value = window.localStorage.getItem(key);
  return value === null ? '' : value;
};

const api = <T>(url: string, options: RequestInit): Promise<T> => fetch(url, options)
  .then((res) => res.json())
  .catch((err) => {
    throw new Error(err);
  });

type MicroServiceResponseType = {
  token: string;
};

type NodeServerResponseType = {};

const getMicroServiceOptions = (): RequestInit => ({
  method: 'GET',
});

const getNodeServiceOptions = (token: string): RequestInit => ({
  method: 'GET',
  headers: {
    Authentication: `Bearer ${token}`,
  },
});

export const requestToMicorService = (
  setError: (err: any) => void,
) => {
  api<MicroServiceResponseType>(
    MICRO_SERVICE_BASE_ENDPOINT,
    getMicroServiceOptions(),
  ).then((res) => {
    saveTokenToLocalStorage(res.token);
  }).catch((err) => {
    setError(err);
  });
};

export const requestToAppServer = (
  callback: (result: any) => void,
  setError: (err: any) => void,
) => {
  api<NodeServerResponseType>(
    NODE_SERVER_BASE_ENDPOINT,
    getNodeServiceOptions(
      getItemFromLocalStorage('access_token'),
    ),
  ).then((res) => {
    callback(res);
  }).catch((err) => {
    setError(err);
  });
};
