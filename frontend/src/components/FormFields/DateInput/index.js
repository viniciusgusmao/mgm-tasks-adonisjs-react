import React from 'react';
import "./index.scss";

const DateInput = ({ label, placeholder = '', value, handleChange }) => (
    <div className="container-input-text">
      <label>{label}</label>
      <input type="date" placeholder={placeholder} value={(typeof value) == 'object' ? '': value } onChange={handleChange} />
    </div>
);

export default DateInput;
