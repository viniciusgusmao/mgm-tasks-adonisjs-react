import api from "config/api";
import urls from "res/urls";

export const store = (path, data) => {
  return api.post(`${urls.api + "" + path}`, data);
};

export const update = (path, id, data) => {
  return api.put(`${urls.api + "" + path + "/" + id}`, data);
};

export const destroy = (path, id, data) => {
  return api.delete(`${urls.api + "" + path + "/" + id}`, data);
};
