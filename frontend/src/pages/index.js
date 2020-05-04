import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from 'components/Logo';
import UserInfo from 'components/UserInfo';
import Nav from 'components/Layout/Nav';
import { Redirect } from 'react-router-dom';

import { isLogin } from 'utils';

const Layout = ({children}) => {
  
  if (!isLogin())
    return <Redirect to="/login" />

  return (
    <Container className="container-pai">
      <Row>
        <Col className="header">
          <Logo />
          <UserInfo />
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col style={{ padding: 0 }} lg={3}>
          <Nav />
        </Col>
        <Col className="content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
