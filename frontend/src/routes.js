import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import Customers from 'pages/Customers';
import Projects from 'pages/Projects';
import Tasks from 'pages/Tasks';
import Employees from 'pages/Employees';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/employees">
        <Employees />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
