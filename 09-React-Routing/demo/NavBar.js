import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <div className="nav-bar">
        <h2>Barra de Navegación</h2>
        <Link exact to="/" activeClassName="active">Home</Link>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/ejemplo" activeClassName="active">Ejemplo</Link>
      </div>
    );
  };