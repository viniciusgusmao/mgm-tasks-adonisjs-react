import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitlePage from 'components/TitlePage';
import Form from './form';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { getIdCompany } from 'utils'

const Create = ({currentPath}) => {
  const company_id = getIdCompany();
  
  const FETCH_COMPANY = gql`
  {
    fetchCompany(id: ${company_id}) {
      customers{
        id
        name
      }
    }
  }
`;

  const { loading, error, data } = useQuery(FETCH_COMPANY);
  
  return (
    <Container>
      <Row>
        <Col lg={12}><TitlePage title="Novo projeto" /></Col>
      </Row>
      <Form currentPath={currentPath} customersFill={data} />
    </Container>  
  );
}

export default Create;