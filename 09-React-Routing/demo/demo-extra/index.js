import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import New from './New.jsx'
import Profile from './Profile.jsx';

const Root = (
  <Router>
    <NavBar />
    <Switch>
      <Redirect from="/old-from" to="/new-from" />
      {/* <Redirect from="/users/:id" to="/users/profile/:id" /> */}
      <Redirect exact from="/users/:id" to="/users/profile/:id" />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/old/object">
        <Redirect to={{
          pathname: "/new",
          search: "?name=Franco",
          state: {name: "Henry"}
        }} />
      </Route>
      <Route path="/old">
        <Redirect to="/new" />
      </Route>
      <Route path="/new">
        <New />
      </Route>
      <Route path="/new-from">
        <h2>New From</h2>
      </Route>
      <Route path="/users/profile/:id">
        <Profile />
      </Route>
      <Route path="/">
        <h2>Default if no match</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

