import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/abouttt">Abouttt</Link>
      <br></br>
      <Link to="/aboutttttt">Aboutttttt</Link>
      <br></br>
      <Link to="/about/other">About Other</Link>
      <br></br>
      <Link to="/ejemplo">Ejemplo</Link>
    </div>
  );
};

// export default function NavBar() {
//   return (
//     <div className="nav-bar">
//       <h2>Barra de Navegación</h2>
//       {/* <NavLink to="/">Home</NavLink> */}
//       <NavLink exact to="/">Home</NavLink>
//       <br></br>
//       <NavLink to="/about" activeClassName="selected">About</NavLink>
//       <br></br>
//       <NavLink to="/abouttt">Abouttt</NavLink>
//       <br></br>
//       <NavLink to="/aboutttttt">Aboutttttt</NavLink>
//       <br></br>
//       <NavLink to="/about/other">About Other</NavLink>
//       <br></br>
//       <NavLink to="/ejemplo" activeStyle={{
//         color: 'green'
//       }}>Ejemplo</NavLink>
//     </div>
//   );
// };