import React from 'react';
import "./index.scss";

const TextInput = ({ label, placeholder = '', value, handleChange, secure=false }) => (
    <div className="container-input-text">
      <label>{label}</label>
      <input type={secure ? 'password' : 'text'} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
);

export default TextInput;
