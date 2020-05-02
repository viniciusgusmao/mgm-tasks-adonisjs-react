import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitlePage from 'components/TitlePage';
import Button from 'components/Button'

import { useHistory } from 'react-router-dom';

const Index = ({currentPath}) => {
  const history = useHistory();
  return (
    <Container>
      <Row>
        <Col lg={10}><TitlePage title="Funcionários cadastrados" /></Col>
        <Col lg={2}><Button title="+ adicionar" handleClick={() => history.push(`${currentPath}/create`)}/></Col>
      </Row>
    </Container>  
  );
}

export default Index;