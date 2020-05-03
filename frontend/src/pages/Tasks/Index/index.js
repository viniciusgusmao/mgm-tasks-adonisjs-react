import React from "react";

import BaseIndex from "pages/BaseIndex";

import { gql } from "apollo-boost";

const Index = ({ currentPath }) => {
  const query = gql`
    {
      allTasks {
        id
        name
        start
        end
        status
        priority
      }
    }
  `;

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Nome" },
    { dataField: "start", text: "Início" },
    { dataField: "end", text: "Final" },
    { dataField: "status", text: "Status" },
    { dataField: "priority", text: "Prioridade" },
  ];

  return (
    <BaseIndex
      currentPath={currentPath}
      titlePage="Tarefas cadastradas"
      query={query}
      columns={columns}
      idQueryGL="allTasks"
    />
  );
};

export default Index;
