import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import NavbarLogo from "./assets/logo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {routes.map(route => (
        <ul className="navbar-nav">
          <li className="logo">
            {/* <NavbarLogo /> */}
            <button>
              <Link to={route.routes}>
                {route.name}
              </Link>
            </button>
          </li>
        </ul>
      ))}
      ;
      {routes.map(route => (
        <Switch>
          <Route
            path={route.routes}
            exact={route.exact}
          >
            <Route>{route.component}</Route>
          </Route>
        </Switch>
      ))}
    </div>
  );
};

export default Navbar;
