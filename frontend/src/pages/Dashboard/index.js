import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./index.scss";

import Logo from 'components/Logo';
import UserInfo from 'components/UserInfo';
import Nav from 'components/Layout/Nav';

import Clientes from './Clientes'
import Projetos from './Projetos'
import Tarefas from './Tarefas'

import Layout from 'pages';

const Dashboard = () => {
  return (
    <Layout>
        <Container>
          <Row>
            <Col lg={5}><Clientes /></Col>
            <Col lg={7}><Projetos /></Col>
          </Row>
          <Row>
            <Col lg={7}><Tarefas /></Col>
            <Col lg={5}></Col>
          </Row>
        </Container>       
    </Layout>
  );
}

export default Dashboard;
