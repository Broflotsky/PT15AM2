import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, NavLink, HashRouter as Router } from 'react-router-dom';

import About from './About.js';
import Ejemplo from './Ejemplo.js';
import NavBar from './NavBar';

// APP.js
function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
};

function Mostrar({match}) {
  console.log('match', match)
  return (<span>Estoy en la ciudad + {match.params.ciudadId}</span>)
}


const Root = (
  <Router>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/ejemplo" render={() => <Ejemplo nombre="Toni" apellido="Tralice"/>} />
    <Route path="/ciudad/:ciudadId" render={({match}) => <Mostrar match={match}/>} />
  </Router>
);

render(Root, document.querySelector('#app'));

