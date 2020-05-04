import React from "react";
import "./index.scss";

import TitleDashboard from "pages/Dashboard/TitleDashboard";
import TaskItem from "pages/Dashboard/Tasks/TaskItem";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Loading from "components/Loading";

const Tarefas = () => {

  const QUERY = gql`
    {
      allTasks {
        id
        name
        status
        priority
      }
    }
  `;
  const { loading, error, data } = useQuery(QUERY, {
    pollInterval: 500,
  });

  if (loading) return <Loading />;

  return (
    <div className="container-dashboard-tarefas">
      <TitleDashboard title="Últimos tarefas adicionadas" currentPath="/tasks" />
      <div>
        {data?.allTasks.slice(0,5).map(item => <TaskItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Tarefas;
