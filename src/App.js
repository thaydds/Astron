import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login, Home, AddStudent, Register } from './components/containers';
import { Navbar } from './components/ui';
import Route from './Route';

import './App.scss';

function App() {
  const { showNavbar } = useSelector(state => state);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} isPrivate />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/alunos/adicionar"
          component={AddStudent}
          isPrivate
        />
      </Switch>
    </div>
  );
}

export default App;
