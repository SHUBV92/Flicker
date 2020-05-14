import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";
import Counter from "../../Components/Counter/Counter"
import ShoppingCart from "../"


import {
  App,
  Img,
  Container,
  Routes
} from "./Navbar.styles";

const Navbar = () => {
  


  return (
    <App>
      <Img src={require("../../assets/images/LogoGold.jpg")} />
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
      <Img src="https://img.icons8.com/plasticine/100/000000/shopping-basket-2.png"/>
      <div>
        counter
      {/* Shopping cart item length */}

      </div> 
    </App>
  );
};

export default Navbar;
