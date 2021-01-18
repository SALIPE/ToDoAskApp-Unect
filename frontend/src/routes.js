import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Vazio from './pages/Vazio';

function Routes () {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Vazio" component={Vazio} />
    </Switch>
  );
}

export default Routes;