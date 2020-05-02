import axios from 'axios';
import urls from 'res/urls';

export const handleLogin = (email, password) =>  axios.post(urls.login,{ email, password })
