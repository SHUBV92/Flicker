import React from "react";

import Home from "../Containers/Home";
import Contact from "../Containers/Contact";
import About from "../Containers/About";
import Products from "../Containers/Products";
import LoginControl from "../Containers/LoginControl";
import Cart from "../Containers/ShoppingCart";
import CartPopUp from "../Containers/CartPopUp/CartPopUp";
import CMS from "../Containers/CMS/CMS";
import WaxMelts from "../Containers/Products/WaxMelts/WaxMelts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHome,
  faEnvelope,
  faUser,
  faShoppingBag

} from "@fortawesome/free-solid-svg-icons";

export const baseRoutes= [
  {
    name: "Home",
    routes: "/",
    component: <Home />,
    exact: true,
    icon:   <FontAwesomeIcon
    icon={faHome}
  />
  },

  {
    name: "Products",
    routes: "/products",
    subProducts:{
      name: "Wax Melts",
      routes: "/products",
      component:<WaxMelts />
    },
    // component1: (val) => (<Products val={val} />)
    component:<Products />,
    icon:   <FontAwesomeIcon
    icon={faShoppingBag}
  />

  },

  {
    name: "About",
    routes: "/about",
    component: <About />,
    icon:   <FontAwesomeIcon
    icon={faUser}
  />
  },
  {
    name: "Contact",
    routes: "/contact",
    component: <Contact />,
    icon:   <FontAwesomeIcon
    icon={faEnvelope}
  />
  },
  // {
  //   name: "Log in",
  //   routes: "/login",
  //   component: <LoginControl />
  // },
  {
    name: "Cart",
    routes: "/cart",
    component: <Cart />
  },
  {
    name: "CMS",
    routes: "/cms",
    component: <CMS />
  }, 

  // {
  //   name: "CMS",
  //   routes: "/cms",
  //   component: <Match />
  // }

  // {
  //   name: "Insta",
  //   routes: "https://www.instagram.com/fragranceandflicker/",
  //   component: <CartPopUp />
  // }
];

// Routes
// const ACCOUNT = "/account";
// const ADMIN = "/admin";
// const PASSWORD_FORGET = "/pw-forget";
// const SIGN_UP = "/signup";

// import Images from "../Containers/Pictures";
// {
//   name: "Images",
//   routes: "/images",
//   component: <Images />
// },
