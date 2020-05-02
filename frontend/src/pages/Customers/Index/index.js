import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitlePage from 'components/TitlePage';
import Button from 'components/Button'

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loading from 'components/Loading';

import DataTable from 'components/DataTable';

import { useHistory } from 'react-router-dom';

const Index = ({currentPath}) => {
  const history = useHistory();

  const DATA = gql`
    {   
      allCustomers{
        id
        name
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(DATA);

  if (loading) return <Loading />;

  const columns = [ 
    { id: 'id', value: "ID" },
    { id: 'name', value: "Nome" }, 
    { id: "email", value: "E-mail" }, 
    { id: 'city', value: "Cidade" }, 
    { id: 'state', value: "Estado" }
  ];

  const data_ = [{
    id: 1,
    name: "vinicius gusmao",
    email: "vinicius@hotmail.com",
    city: "Vitoria",
    state: "ES"
  }]

  return (
    <Container>
      <Row>
        <Col lg={10}><TitlePage title="Clientes cadastrados" /></Col>
        <Col lg={2}><Button title="+ adicionar" handleClick={() => history.push(`${currentPath}/create`)}/></Col>
      </Row>
      <Row>
        <Col lg={12}><DataTable columns={columns} data={data_} /></Col>
      </Row>
    </Container>  
  );
}

export default Index;