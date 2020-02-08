import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/containers';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
}

export default App;
