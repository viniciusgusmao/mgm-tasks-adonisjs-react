import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TitlePage from "components/TitlePage";
import Button from "components/Button";

import { useQuery } from "@apollo/react-hooks";

import Loading from "components/Loading";

import DataTable from "components/DataTable";
import { useHistory } from "react-router-dom";

const BaseIndex = ({ currentPath, titlePage, query, columns, idQueryGL }) => {
  const history = useHistory();

  const { loading, error, data } = useQuery(query, {
    pollInterval: 500,
  });

  if (loading) return <Loading />;

  return (
    <Container>
      <Row>
        <Col lg={10}>
          <TitlePage title={titlePage} />
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
            data={data[idQueryGL]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BaseIndex;
