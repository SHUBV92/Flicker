import React from "react";
import { NavLink } from "react-router-dom";
import { baseRoutes } from "../../constants/routes";
import Counter from "../../Components/Counter/Counter";
import ShoppingCart from "../";
// import CartPopUp from "../CartPopUp/CartPopUp.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHome

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
        {baseRoutes.map(route => (
          <Links>
            <li>
            {/* {route.icon} */}
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
                {route.name === "Products" ? (
                  <div class="dropdown">
                    <button class="dropbtn">
                      {route.icon}
                    </button>
                    <div class="dropdown-content">
                      <a
                        onClick={() =>
                          handleProductsPopUp("Wardrobe")
                        }
                        href="/"
                      >
                        Wardrobe-Freshners
                      </a>

                      <hr />

                      <a
                        onClick={() =>
                          handleProductsPopUp("Wax Melt")
                        }
                        href="/about"
                      >
                        Wax Melts
                      </a>

                      <hr />

                      <a
                        onClick={() =>
                          handleProductsPopUp("Wax Burners")
                        }
                        href="/contact"
                      >
                        Wax Burners
                      </a>
                    </div>
                  </div>
                ) : (
                  // route.name
                  route.icon
                )}

                {/* {route.name} */}
              </NavLink>
            </li>
          </Links>
        ))}

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
