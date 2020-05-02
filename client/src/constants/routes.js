import React from "react";

import Images from "../Containers/Pictures";
import Home from "../Containers/Home";
import Contact from "../Containers/Contact";
import About from "../Containers/About";
import Product from "../Containers/ProductWrapper";
import LoginControl from "../Containers/LoginControl";
import Cart from "../Containers/ShoppingCart";

export const routes = [
  {
    name: "Sign_in",
    routes: "/signin",
    component: <LoginControl />
  },
  {
    name: "Products",
    routes: "/products",
    component: <Product />
  },
  {
    name: "Home",
    routes: "/",
    component: <Home />,
    exact: true
  },
  {
    name: "Images",
    routes: "/images",
    component: <Images />
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
  {
    name: "Cart",
    routes: "/cart",
    component: <Cart />
  }
];

// Routes
// const ACCOUNT = "/account";
// const ADMIN = "/admin";
// const PASSWORD_FORGET = "/pw-forget";
// const SIGN_UP = "/signup";