import React from "react";

import Images from "../Components/Pictures";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Product from "../Components/Products";

// Routes
const LANDING = "/";
const SIGN_UP = "/signup";
const SIGN_IN = "/signin";
const HOME = "/home";
const ACCOUNT = "/account";
const ADMIN = "/admin";
const PASSWORD_FORGET = "/pw-forget";
const PRODUCTS = "/products";
const ABOUT = "/about";

export const routes = [
  {
    name: "Sign_in",
    routes: SIGN_IN,
    component: <Contact />
  },

  {
    name: "Landing",
    routes: LANDING,
    component: <Product />
  },

  {
    name: "Home",
    routes: HOME,
    component: <Home />,
    exact: true
  },

  {
    name: "Products",
    routes: PRODUCTS,
    component: <Images />
  },

  {
    name: "About",
    routes: ABOUT,
    component: <About />
  }
];
