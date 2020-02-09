import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login, Home } from './components/containers';
import { Navbar } from './components/ui';

import './App.scss';

function App() {
  const { showNavbar } = useSelector(state => state);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
