import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const TitleDashboard = ({ title, currentPath }) => (
  <div className="container-title-dashboard">
    <h1>{title}</h1>
    <Link to={currentPath}>ver todos</Link>
  </div>
);

export default TitleDashboard;
