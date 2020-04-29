import React from 'react';
import Logo from 'components/Logo';
import FormLogin from './form';
import "./index.scss";

const Login = () => (
  <div className="container">
    <Logo />
    <div className="login-box">
        <h1>Login</h1>
        <FormLogin />
    </div>
  </div>
);

export default Login;

