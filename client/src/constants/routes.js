import React from "react";

import Home from "../Containers/Home";
import Contact from "../Containers/Contact";
import About from "../Containers/About";
import Products from "../Containers/Products";
import LoginControl from "../Containers/LoginControl";
import Cart from "../Containers/ShoppingCart";
import CartPopUp from "../Containers/CartPopUp/CartPopUp";
import CMS from "../Containers/CMS/CMS";

export const routes = [
  {
    name: "Home",
    routes: "/",
    component: <Home />,
    exact: true
  },

  {
    name: "Products",
    routes: "/products",
    component: <Products />
  },

  {
    name: "About",
    routes: "/about",
    component: <About />
  },
  {
    name: "Contact",
    routes: "/contact",
    component: <Contact />
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
