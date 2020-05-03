import React from "react";
import "./index.scss";

const DeleteButton = ({ title, handleClick }) => (
  <button className="delete-button-form" onClick={handleClick}>
    {title}
  </button>
);

export default DeleteButton;
