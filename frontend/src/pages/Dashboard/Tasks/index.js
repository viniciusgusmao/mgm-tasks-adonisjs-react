import React from "react";
import "./index.scss";

import TitleDashboard from "pages/Dashboard/TitleDashboard";

const Tarefas = () => (
  <div className="container-dashboard-tarefas">
    <TitleDashboard title="Últimos tarefas adicionadas" currentPath="/tasks" />
  </div>
);

export default Tarefas;
