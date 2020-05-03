import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.scss";

import Customers from "pages/Dashboard/Customers";
import Projects from "pages/Dashboard/Projects";
import Tasks from "pages/Dashboard/Tasks";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loading from "components/Loading";

import Layout from "pages";

const Dashboard = () => {
  const QUERY = gql`
    {
      allCustomers {
        id
        name
        email
        avatar
      }
      allProjects {
        id
        name
        status
      }
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
    <Layout>
      <Container>
        <Row>
          <Col lg={5}>
            <Customers data={data.allCustomers} />
          </Col>
          <Col lg={7}>
            <Projects data={data.allProjects} />
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <Tasks data={data.allTasks} />
          </Col>
          <Col lg={5}>{/* <img src={} alt="Imagem demo projeto" /> */}</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Dashboard;
