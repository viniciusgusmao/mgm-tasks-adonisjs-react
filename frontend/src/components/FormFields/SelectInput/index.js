import React from 'react';
import "./index.scss";

const SelectInput = ({ label, placeholder = '', value = '', handleChange, fill = [{ id: '', name: '' }]}) => (
    <div className="container-input-select">
      <label>{label}</label>
      <select
        placeholder={placeholder} 
        onChange={handleChange}
        defaultValue={value}
      >
        <option key="0" value=""></option>
        {fill.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        
      </select>
    </div>
);

export default SelectInput;
