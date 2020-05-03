import React from "react";

import BaseIndex from "pages/BaseIndex";

import { gql } from "apollo-boost";

const Index = ({ currentPath }) => {
  const query = gql`
    {
      allCustomers {
        id
        name
        email
        city
        state
      }
    }
  `;

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "name", text: "Nome" },
    { dataField: "email", text: "E-mail" },
    { dataField: "city", text: "Cidade" },
    { dataField: "state", text: "Estado" },
  ];

  return (
    <BaseIndex
      currentPath={currentPath}
      titlePage="Clientes cadastrados"
      query={query}
      columns={columns}
      idQueryGL="allCustomers"
    />
  );
};

export default Index;
