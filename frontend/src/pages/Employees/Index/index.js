import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TitlePage from "components/TitlePage";
import Button from "components/Button";

import { useQuery } from "@apollo/react-hooks";

import DataTable from "components/DataTable";
import { gql } from "apollo-boost";
import Loading from "components/Loading";

import { useHistory } from "react-router-dom";

const Index = ({ currentPath }) => {
  const history = useHistory();

  const DATA = gql`
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

  const { loading, error, data } = useQuery(DATA, {
    pollInterval: 500,
  });

  if (loading) return <Loading />;

  return (
    <Container>
      <Row>
        <Col lg={10}>
          <TitlePage title="Funcionários cadastrados" />
        </Col>
        <Col lg={2}>
          <Button
            title="+ adicionar"
            handleClick={() => history.push(`${currentPath}/create`)}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} style={{ paddingTop: 15 }}>
          <DataTable
            currentPath={currentPath}
            columns={columns}
            data={data.allEmployees}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
