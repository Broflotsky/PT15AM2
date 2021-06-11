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
    </div>
  );
};

function Home() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
      <Link to='/linkAbsolute'>Link Absolute</Link>
      <br></br>
      <Link to={`${match.url}/linkRelative`}>Link Relative</Link>

      {/* <Switch>
        <Route path={`${match.url}/linkRelative`}>
          <h2>Estoy en /home/linkRelative 2</h2>
        </Route>
      </Switch> */}
    </div>
  );
};


const Root = (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/home/linkRelative">
        <h2>Estoy en /home/linkRelative</h2>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <h2>Default</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

