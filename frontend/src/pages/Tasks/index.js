import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch  
} from "react-router-dom";

import Layout from 'pages';
import Index from 'pages/Tasks/Index';
import Create from 'pages/Tasks/Create';
import Edit from 'pages/Tasks/Edit';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { getIdCompany } from 'utils';

const Tasks = () => {
  const company_id = getIdCompany();
  const FETCH_COMPANY = gql`
    {
      fetchCompany(id: ${company_id}) {
        customers{
         projects{
           id
           name
         }
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
          <Create currentPath={path} projectsFill={data} />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <Edit currentPath={path} projectsFill={data} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Tasks;
