import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/containers';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
}

export default App;
