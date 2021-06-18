import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, Link, HashRouter as Router, useRouteMatch } from 'react-router-dom';

import Home from './Home.jsx';
import Params from './Params.jsx';
import Other from './Other.jsx';
import Location from './Location.jsx';
import History from './History.jsx';

const customLocation = {
  pathname: '/location',
  state: { extraData: 'Henry' }
}

function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Default</Link>
      <br></br>
      <Link to="/component">Component</Link>
      <br></br>
      <Link to="/component/one/two">Component with params</Link>
      <br></br>
      <Link to="/component/one/two/three/four">Component with more params</Link>
      <br></br>
      <Link to="/component/one">Component with less params</Link>
      <br></br>
      <Link to="/render/1">Render</Link>
      <br></br>
      <Link to="/location?name=Franco&age=26">Location</Link>
      <br></br>
      <Link to={customLocation}>Custom Location</Link>
      <br></br>
      <Link to="/history">History</Link>
    </div>
  );
};

const Root = (
  <Router>
    <NavBar />
    <Switch>
      <Route 
        path="/component/:firstParam/:secondParam"
        component={Params}
      />
      <Route 
        path="/component"
        component={Home}
      />
      {/* <Route
        path="/render/:paramOne"
        render={({ match }) => (
          <Other match={match} Ejemplo />
        )}
      /> */}
      <Route
        path="/render/:paramOne"
        render={(props) => (
          <Other {...props} Ejemplo />
        )}
      />
      <Route
        path="/location"
        render={(props) => (
          <Location {...props} Ejemplo />
        )}
      />
      <Route 
        path="/history"
        component={History}
      />
      <Route path="/">
        <h2>Default</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

