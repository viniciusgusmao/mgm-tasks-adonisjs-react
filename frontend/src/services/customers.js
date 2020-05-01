import api from 'config/api';
import urls from 'res/urls';

export const store = (path,data) => {
  return api.post(`${urls.api+''+path}`, data);
}