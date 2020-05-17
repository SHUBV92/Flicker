import React from "react";
import { NavLink } from "react-router-dom";
// import { Container } from "./CartPopUp.styles.jsx";
import "./CartPopUp.modules.css"

const CartPopUp = () => (
//   <div>
    <nav class="navbar">
      <ul class="navbar-nav">
          <li class="nav-item">
        <a href="/cart" class="nav-link">
        <span class="link-text">Cart</span>
        {/* Selected Item Card */}
        <h2 class="link-text">Subtotal</h2>
        <h2 class="link-text">total</h2>

        {/* <NavLink> */}
        <button>View Cart</button>
        {/* </NavLink> */}
        </a>      
        </li>
      </ul>
    </nav>
//   </div>
);

export default CartPopUp;
