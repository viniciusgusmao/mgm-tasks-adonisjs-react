import api from "config/api";
import urls from "res/urls";
import { getToken } from 'utils';

export const store = (path, data) => {
  return api.post(`${urls.api + "" + path}`, data, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const update = (path, id, data) => {
  return api.put(`${urls.api + "" + path + "/" + id}`, data, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const destroy = (path, id) => {
  return api.delete(`${urls.api + "" + path + "/" + id}`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
};
