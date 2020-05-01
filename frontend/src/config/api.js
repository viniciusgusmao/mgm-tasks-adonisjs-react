import axios from 'axios';
import urls from 'res/urls';

const token_ = JSON.parse(localStorage.getItem('@user_gp'));
const token = token_.token;

const api = axios.create({
  baseURL: urls.api,
  headers: {'Authorization': `Bearer ${token}`}
});

export default api;