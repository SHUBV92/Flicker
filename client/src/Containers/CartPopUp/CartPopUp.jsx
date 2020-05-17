import React from "react";
import { NavLink } from "react-router-dom";
// import { Container } from "./CartPopUp.styles.jsx";
import "./CartPopUp.modules.css"

const CartPopUp = () => (
//   <div>
    <nav class="navbar">
      <ul class="navbar-nav">
          <li class="logo">
        <a href="/cart" class="nav-link">
        <span>Cart</span>
        {/* Selected Item Card */}
        <h2>Subtotal</h2>
        <h2>total</h2>

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
