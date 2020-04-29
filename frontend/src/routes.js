import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
