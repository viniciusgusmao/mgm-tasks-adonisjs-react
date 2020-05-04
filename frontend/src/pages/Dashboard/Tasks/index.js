import React from "react";
import "./index.scss";

import TitleDashboard from "pages/Dashboard/TitleDashboard";
import TaskItem from "pages/Dashboard/Tasks/TaskItem";

const Tarefas = ({ data }) => (
  <div className="container-dashboard-tarefas">
    <TitleDashboard title="Últimos tarefas adicionadas" currentPath="/tasks" />
    <div>
      {data.slice(0,5).map(item => <TaskItem key={item.id} {...item} />)}
    </div>
  </div>
);

export default Tarefas;
