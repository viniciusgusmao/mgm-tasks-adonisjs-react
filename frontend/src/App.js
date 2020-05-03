import React, { useEffect } from "react";
import "./App.scss";
import "./assets/normalize.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "config/graphql";

const App = () => {
  useEffect(() => {
    document.title = "Gestor de Projetos";
  }, []);
  return (
    <>
      <ToastContainer />
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </>
  );
};

export default App;
