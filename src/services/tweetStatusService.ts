import { fetchService, MAIN_SERVICE_API } from './api';

const tweetStatusService = <T>(
  callback: (result: any) => void,
  errorHandlng: (err: any) => void,
  body: T,
) => {
  fetchService(
    MAIN_SERVICE_API,
    { method: 'GET', mode: 'cors' },
  ).then((result) => callback(result))
    .catch((err) => errorHandlng(err));
};

export default tweetStatusService;
