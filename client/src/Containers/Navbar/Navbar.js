import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";

import {
  App,
  Container,
  Routes
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <App>
      {routes.map(route => (
        <Container
          style={{ display: "inline-block" }}
        >
          <Routes>
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
          </Routes>
        </Container>
      ))}
    </App>
  );
};

export default Navbar;
