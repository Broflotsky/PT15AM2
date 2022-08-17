import React from "react";
// eslint-disable-next-line no-unused-vars
import logo from "../../assets/logo.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
          </li>
          <li>
          </li>
        </div>
      </ul>
    </div>
  );
}
