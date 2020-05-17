import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import Counter from "../../Components/Counter/Counter";
import ShoppingCart from "../";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faMenorah
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Logo,
  Links,
  NavWrapper
} from "./Navbar.styles";

const Navbar = () => (
  <Container>
    <FontAwesomeIcon icon={faShoppingCart} />
    {/* <FontAwesomeIcon icon={faFacebookF} /> */}
    <FontAwesomeIcon icon={faMenorah} />
    
    <Logo
      src={require("../../assets/images/LogoGold.jpg")}
    />
    <NavWrapper>
      {routes.map(route => (
        <Links>
          <li>
            <NavLink
              to={route.routes}
              activeStyle={{
                fontWeight: "bold",
                color: "white"
              }}
              style={{
                textDecoration: "none",
                color: "black"
              }}
            >
              {route.name}
            </NavLink>
          </li>
        </Links>
      ))}
    </NavWrapper>
    
    <div>{/* Shopping cart item length */}</div>
  </Container>
);

export default Navbar;
