import axios from 'axios';
const URL = 'https://www.mocky.io/v2';
let authToken;

export const apiRequest = async (path, method, data, params, headers) => {
  try {
    const url = `${URL}/${path}`;
    const requestData = {
      url,
      data,
      method,
      params,
      headers: Object.assign(headers || {}, {
        authorization: `Bearer `
      })
    };
    return await axios.request(requestData);
  } catch (err) {
    return err;
  }
};

export const setAuthToken = token => {
  authToken = token;
};
