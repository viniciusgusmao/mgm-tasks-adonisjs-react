import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.scss";

import Customers from "pages/Dashboard/Customers";
import Projects from "pages/Dashboard/Projects";
import Tasks from "pages/Dashboard/Tasks";

import Layout from "pages";

const Dashboard = () =>  (
  <Layout>
    <Container>
      <Row>
        <Col lg={5}>
          <Customers />
        </Col>
        <Col lg={7}>
          <Projects  />
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col lg={7}>
          <Tasks/>
        </Col>
        <Col lg={5}><img className="img_pessoas" src={require('../../assets/images/pessoas.jpg')} alt="Imagem demo projeto" /></Col>
      </Row>
    </Container>
  </Layout>
);


export default Dashboard;
