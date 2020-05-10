import React from "react";

import Home from "../Containers/Home";
import Contact from "../Containers/Contact";
import About from "../Containers/About";
import Products from "../Containers/Products";
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
    component: <Products />
  },
  {
    name: "Home",
    routes: "/",
    component: <Home />,
    exact: true
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

// import Images from "../Containers/Pictures";
// {
  //   name: "Images",
  //   routes: "/images",
  //   component: <Images />
  // },