import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Layout from 'pages';
import Index from 'pages/Employees/Index';
import Create from 'pages/Employees/Create';
import Edit from 'pages/Employees/Edit';

const Employees = () => {
  let { path } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Index currentPath={path} />
        </Route>
        <Route path={`${path}/create`}>
          <Create currentPath={path} />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <Edit currentPath={path} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Employees;
