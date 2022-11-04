import React from "react";
import logo from "../../assets/logo.png";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <img src={logoHenry} alt="logo-henry" />
          <img src={logo} alt="logo" />
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <span>Navieras</span>
          </li>
          <li>
            <span>Promociones</span>
          </li>
        </div>
      </ul>
    </div>
  );
}
