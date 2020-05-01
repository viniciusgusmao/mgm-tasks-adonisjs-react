import React from 'react';
import './index.scss';

const BackButtonForm = ({ title, handleClick }) => (
  <button className="back-button-form" onClick={handleClick}>{title}</button>
);

export default BackButtonForm;
