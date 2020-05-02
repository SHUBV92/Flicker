import React from "react";
// import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";

const Navbar = () => {
  return (
    <div className="navbar">
      {routes.map(route => (
        <ul
          className="navbarnav"
          style={{ display: "inline-block" }}
        >
          <li className="logo">
            <button>
              <NavLink
                to={route.routes}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                {route.name}
              </NavLink>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Navbar;
