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

const Projects = () => {
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
        <Route path={`${path}/edit/:id`}>
          <Edit currentPath={path} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Projects;
