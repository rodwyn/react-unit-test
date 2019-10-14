import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRoute';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
