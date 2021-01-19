import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ToDo from './pages/ToDo';


function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/todo" component={ToDo} />
    </Switch>
  );
}

export default Routes;