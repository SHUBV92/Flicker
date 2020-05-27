import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import Counter from "../../Components/Counter/Counter";
import ShoppingCart from "../";
// import CartPopUp from "../CartPopUp/CartPopUp.jsx";

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

const Navbar = ({
  handleCartPopUp,
  handleProductsPopUp
}) => {
  return (
    <Container>
      {/* <FontAwesomeIcon icon={faFacebookF} /> */}
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
          {(route.name === "Products")?
           <div class="dropdown">
          <button class="dropbtn">
          {route.name}
          </button>
          <div class="dropdown-content">
            <a href="#">Wardrobe Freshners</a>
            <a href="#">Wax Melts</a>
            <a href="#">Wax Burners</a>
          </div>
        </div>
          :route.name
          }

                {/* {route.name} */}
              </NavLink>
            </li>
          </Links>
        ))}

        {/* <div class="dropdown">
          <button class="dropbtn">
            Products
          </button>
          <div class="dropdown-content">
            <a href="#">Wardrobe Freshners</a>
            <a href="#">Wax Melts</a>
            <a href="#">Wax Burners</a>
          </div>
        </div> */}

        <FontAwesomeIcon
          onClick={() => handleProductsPopUp()}
          icon={faShoppingCart}
        />

        <FontAwesomeIcon
          onClick={() => handleCartPopUp()}
          icon={faShoppingCart}
        />
      </NavWrapper>
      {/* <div>Shopping cart item length</div> */}
    </Container>
  );
};

export default Navbar;
