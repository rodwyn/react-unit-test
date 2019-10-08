import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
