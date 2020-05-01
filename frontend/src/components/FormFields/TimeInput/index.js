import React from 'react';
import "./index.scss";

const TimeInput = ({ label, placeholder = '', value, handleChange }) => (
    <div className="container-input-text">
      <label>{label}</label>
      <input 
        type="time" 
        min="08:00" 
        max="18:00" 
        placeholder={placeholder} 
        value={(typeof value) == 'object' ? '': value } 
        onChange={handleChange} 
      />
    </div>
);

export default TimeInput;
