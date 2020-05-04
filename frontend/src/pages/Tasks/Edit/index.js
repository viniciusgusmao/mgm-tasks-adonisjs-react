import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TitlePage from "components/TitlePage";
import Form from "./form";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loading from "components/Loading";

const Edit = ({ currentPath, dataFillSelect }) => {
  let { id } = useParams();

  const FETCH_TASK = gql`
    {   
      fetchTask(id: ${id}){
        id
        name
        description
        start
        end
        priority
        status
        project{
          id
        }
        employees{
          id      
        }
      }
    }
`;
  const { loading, error, data } = useQuery(FETCH_TASK, {
    pollInterval: 500,
  });

  if (loading) return <Loading />;

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <TitlePage
            title={`Atualizar tarefa - ${data?.fetchTask?.name.toUpperCase()}`}
          />
        </Col>
      </Row>
      <Form
        currentPath={currentPath}
        dataFillSelect={dataFillSelect}
        id={id}
        initialValues={data}
      />
    </Container>
  );
};

export default Edit;
