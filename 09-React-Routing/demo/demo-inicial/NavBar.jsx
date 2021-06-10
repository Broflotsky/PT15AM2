import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// export default function NavBar() {
//   return (
//     <div className="nav-bar">
//       <h2>Barra de Navegación</h2>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/ejemplo">Ejemplo</Link>
//     </div>
//   );
// };

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about" activeClassName="selected">About</NavLink>
      <NavLink to="/ejemplo" activeStyle={{
        color: 'green'
      }}>Ejemplo</NavLink>
    </div>
  );
};