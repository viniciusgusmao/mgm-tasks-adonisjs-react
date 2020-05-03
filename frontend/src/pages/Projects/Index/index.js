import React from "react";

import BaseIndex from "pages/BaseIndex";

import { gql } from "apollo-boost";

const Index = ({ currentPath }) => {
  const query = gql`
    {
      allProjects {
        id
        name
        start
        end
        status
      }
    }
  `;

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Nome" },
    { dataField: "start", text: "Início" },
    { dataField: "end", text: "Final" },
    { dataField: "status", text: "Status" },
  ];

  return (
    <BaseIndex
      currentPath={currentPath}
      titlePage="Projetos cadastrados"
      query={query}
      columns={columns}
      idQueryGL="allProjects"
    />
  );
};

export default Index;
