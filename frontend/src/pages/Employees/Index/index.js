import React from "react";

import BaseIndex from "pages/BaseIndex";

import { gql } from "apollo-boost";

const Index = ({ currentPath }) => {
  console.log("TEste");
  const query = gql`
    {
      allEmployees {
        id
        name
        email
      }
    }
  `;

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Nome" },
    { dataField: "email", text: "E-mail" },
  ];

  return (
    <BaseIndex
      currentPath={currentPath}
      titlePage="Funcionários cadastrados"
      query={query}
      columns={columns}
      idQueryGL="allEmployees"
    />
  );
};

export default Index;
