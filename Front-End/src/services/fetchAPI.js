import axios from 'axios';


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint).catch((error) => {
    return error.response
  });
  return data;
};

export const updateData = async (endpoint, obj) => {
  const { data } = await api.put(endpoint, obj).catch((error) => {
    return error.response
  });
  return data;
};

export const deleteData = async (endpoint) => {
  const { data } = await api.delete(endpoint).catch((error) => {
    return error.response
  });

  return data;
}

export const createData = async (endpoint, obj) => {
  const { data } = await api.post(endpoint, obj).catch((error) => {
    return error.response
  });
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
