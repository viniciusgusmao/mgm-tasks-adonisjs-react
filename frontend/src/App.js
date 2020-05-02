import React, { useEffect } from "react";
import "./App.scss";
import "./assets/normalize.css";
// import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import Routes from "./routes";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "config/graphql";

const App = () => {
  useEffect(() => {
    document.title = "Gestor de Projetos";
  }, []);
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
