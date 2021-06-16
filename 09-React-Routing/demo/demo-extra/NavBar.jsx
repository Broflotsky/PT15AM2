import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/old">Old</Link>
      <br></br>
      <Link to="/new">New</Link>
      <br></br>
      <Link to="/old/object">Old object</Link>
      <br></br>
      <Link to="/old-from">Old-From</Link>
      <br></br>
      <Link to="/users/147">Profile User 147</Link>
    </div>
  );
};