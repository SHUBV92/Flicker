import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Container } from "./CartPopUp.styles.jsx";
import "./CartPopUp.modules.css";

import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";


const CartPopUp = () => {
  const [Total, setTotal] = useState(0);

  const fetchProductData = data => {
    setTotal(data);
  };

  return (
    <div class="Container">
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="link-text">Cart</span>
            {/* Selected Item Card */}
            <h2 class="link-text">Subtotal</h2>
            <a href="/cart" class="nav-link">
              {/* <NavLink> */}
              <button>View Cart</button>
              {/* </NavLink> */}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CartPopUp;
