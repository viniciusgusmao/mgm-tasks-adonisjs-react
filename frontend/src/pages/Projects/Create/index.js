import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitlePage from 'components/TitlePage';
import Form from './form';

const Create = ({currentPath, customersFill}) => {
  return (
    <Container>
      <Row>
        <Col lg={12}><TitlePage title="Novo projeto" /></Col>
      </Row>
      <Form currentPath={currentPath} customersFill={customersFill} />
    </Container>  
  );
}

export default Create;