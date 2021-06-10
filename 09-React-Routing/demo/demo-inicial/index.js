import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, HashRouter as Router, useParams } from 'react-router-dom';

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';
import Mostrar from './Mostrar.jsx';

function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
};

const Root = (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/ejemplo">
        <Ejemplo nombre="Toni" apellido="Tralice"/>
      </Route>
      {/* <Route path="/ciudad">
        <h2>Estoy en ciudad</h2>
      </Route> */}
      <Route path="/ciudad/:ciudadId">
        <Mostrar />
      </Route>
      <Route path="/">
        <h2>Default if no match</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

