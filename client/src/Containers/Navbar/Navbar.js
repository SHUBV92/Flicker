import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import Counter from "../../Components/Counter/Counter";
import ShoppingCart from "../";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import {
  App,
  Img,
  Links,
  Routes,
  NavWrapper
} from "./Navbar.styles";

const Navbar = () => (
  <App>
    <Img
      src={require("../../assets/images/LogoGold.jpg")}
    />
    <NavWrapper>
      {routes.map(route => (
        <Links>
          <Routes>
            <NavLink
              to={route.routes}
              activeStyle={{
                fontWeight: "bold",
                color: "salmon",
              }}
              style={{ textDecoration: 'none' }}
            >
              {route.name}
            </NavLink>
          </Routes>
        </Links>
      ))}
    </NavWrapper>
    {/* <Img src="https://img.icons8.com/plasticine/100/000000/shopping-basket-2.png" /> */}

    <FontAwesomeIcon icon={faShoppingCart} />

    <div>{/* Shopping cart item length */}</div>
  </App>
);

export default Navbar;
