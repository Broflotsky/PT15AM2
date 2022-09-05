import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import logo_henry from "../../assets/logo_henry.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <img src={logo_henry} alt="logo_henry" />
        </li>
        <li>
          <h1>TIPOS DE MÚSICA</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNav.active : styleNav.disable
              }
              to="/contact"
            >
              <span>Contacto</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
