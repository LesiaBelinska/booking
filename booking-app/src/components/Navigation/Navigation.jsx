import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo.jsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={s.list}>
        <div className={s.logoWrapper}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              <Logo />
            </NavLink>
          </li>
        </div>
        <div className={s.navigationWrapper}>
          <li className={s.item}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${s.activeLink}` : `${s.link}`
              }
            >
              About
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
