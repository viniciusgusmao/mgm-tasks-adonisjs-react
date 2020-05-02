import axios from 'axios';
import urls from 'res/urls';
import { getToken } from 'utils';

const token = getToken();

const api = axios.create({
  baseURL: urls.api,
  headers: {'Authorization': `Bearer ${token}`}
});

export default api;