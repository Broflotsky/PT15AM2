import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, Link, HashRouter as Router, useRouteMatch } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Default</Link>
      <br></br>
      <Link to="/home">Home</Link>
      <br></br>
      <Link to="/exact">Exact</Link>
      <br></br>
      <Link to="/exact/another">Exact-Another</Link>
      <br></br>
      <Link to="/nostrict/">No Strict</Link>
      <br></br>
      <Link to="/nostrict">No Strict</Link>
      <br></br>
      <Link to="/strict">Strict No Slash</Link>
      <br></br>
      <Link to="/strict/">Strict Slash</Link>
      <br></br>
      <Link to="/sensitive">Sensitive</Link>
      <br></br>
      <Link to="/Sensitive">Sensitive Mayus</Link>
    </div>
  );
};

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
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/exact">
        <h2>Exact</h2>
      </Route>
      {/* <Route path="/exact/another">
        <h2>Another</h2>
      </Route> */}
      <Route path="/exact">
        <h2>Not Exact</h2>
      </Route>
      {/* <Route path="/nostrict/">
        <h2>Not Strict</h2>
      </Route> */}
      <Route path="/nostrict">
        <h2>Not Strict</h2>
      </Route>
      <Route strict path="/strict/">
        <h2>Strict</h2>
      </Route>
      {/* <Route strict path="/strict">
        <h2>Strict</h2>
      </Route> */}
      {/* <Route exact strict path="/strict">
        <h2>Strict</h2>
      </Route> */}
      {/* <Route sensitive path="/sensitive">
        <h2>Sensitive</h2>
      </Route>
      <Route sensitive path="/Sensitive">
        <h2>Sensitive Mayus</h2>
      </Route> */}
      <Route path="/sensitive">
        <h2>No Sensitive</h2>
      </Route>
      <Route path="/">
        <h2>Default</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

