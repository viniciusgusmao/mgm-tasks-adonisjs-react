import React from 'react';
import "./index.scss";

const LoginButton = ({ title, handleSubmit }) => (
    <button type="button" className="login-button" onClick={handleSubmit}>
      {title}
    </button>
);

export default LoginButton
