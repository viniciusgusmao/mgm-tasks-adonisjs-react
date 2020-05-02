import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation
} from "react-router-dom";

import Layout from 'pages';
import Index from 'pages/Projects/Index';
import Create from 'pages/Projects/Create';
import Edit from 'pages/Projects/Edit';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { getIdCompany } from 'utils'

const Projects = () => {
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

  let { path } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Index currentPath={path} />
        </Route>
        <Route path={`${path}/create`}>
          <Create currentPath={path} customersFill={data} />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <Edit currentPath={path} customersFill={data} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Projects;
