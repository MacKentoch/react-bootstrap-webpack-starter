import axios from 'axios';
import { Method } from 'axios';
import {
  getMethod,
  jsonHeader,
  defaultOptions,
  getLocationOrigin,
} from './fetchTools';

export const getSomething = (
  endpoint = 'api/getSomethingByDefault',
): Promise<any> => {
  const method = getMethod.method as Method;
  const headers = jsonHeader;
  const url = `${getLocationOrigin()}/${endpoint}`;
  const options = { ...defaultOptions };

  return axios
    .request({
      method,
      url,
      withCredentials: true,
      ...headers,
      ...options,
    })
    .then(data => data)
    .catch(error => Promise.reject(error));
};
