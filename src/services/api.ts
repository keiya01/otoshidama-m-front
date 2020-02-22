export const TWITTER_SERVICE_API = 'https://twitter-micro.now.sh';
export const MAIN_SERVICE_API = 'https://otoshidama-m-server.otoshidama-m.now.sh/api';

export const fetchService = (
  url: string,
  options: RequestInit,
): Promise<Response> => fetch(url, options)
  .then((res) => res.json())
  .catch((err) => {
    throw new Error(err);
  });
