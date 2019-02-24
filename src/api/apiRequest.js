import axios from 'axios';
const URL = 'http://172.16.0.91:8082';
let authToken;

export const apiRequest = async (path, method, data, params, headers) => {
  try {
    const url = `${URL}/${path}`;
    const requestData = {
      url,
      data,
      method,
      params,
      headers: Object.assign(headers || {}, {})
    };
    return await axios.request(requestData);
  } catch (err) {
    return err;
  }
};

export const setAuthToken = token => {
  authToken = token;
};
