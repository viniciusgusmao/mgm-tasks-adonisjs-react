import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Layout from 'pages';
import Index from './Index';
import Create from './Create';
import Edit from './Edit';

const Clientes = () => {
  let { path } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <Index />
        </Route>
        <Route path={`${path}/create`}>
          <Create />
        </Route>
        <Route path={`${path}/edit`}>
          <Edit />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Clientes;
