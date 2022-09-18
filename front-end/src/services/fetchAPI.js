import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gerenciador-dev.herokuapp.com/',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body).catch((error) => {
    if (error.response) {
      return error.response
    }
  });
  return data;
};
