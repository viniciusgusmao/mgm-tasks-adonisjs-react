import React from 'react';
import './index.scss';

const Button = ({ title, handleClick }) => (
  <button type="button" className="new-item" onClick={handleClick}>{title}</button>
);

export default Button;
