import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import styleNav from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styleNav.active : styleNav.disable
            }
            to="/"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNav.active : styleNav.disable
              }
              to="/shipping"
            >
              <span>Navieras</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styleNav.active : styleNav.disable
              }
              to="/promotions"
            >
              <span>Promotions</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
