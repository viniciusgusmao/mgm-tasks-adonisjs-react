import axios from 'axios';
import urls from 'res/urls';

const api = axios.create({
  baseURL: urls.api
});

export default api;