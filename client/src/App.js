import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { baseRoutes } from "./constants/routes";
import Navbar from "./Containers/Navbar";
import CartPopUp from "./Containers/CartPopUp/CartPopUp.jsx";
import { Footer } from "./Containers/Footer/Footer";
import {
  Container,
  Pages
} from "./App.styles.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faComments

// } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";
import Products from "./Containers/Products";
import WaxMelts from "./Containers/Products/WaxMelts/WaxMelts";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false,
      selectedCategory: "WAX MELTS"
    };
    this.handleCartPopUp = this.handleCartPopUp.bind(
      this
    );

    this.handleProductsPopUp = this.handleProductsPopUp.bind(
      this
    );
  }

  handleCartPopUp = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  };

  handleProductsPopUp = (Category) => {

    this.setState({
      selectedCategory: Category
    });
  };

  render() {
    return (
      <Container>
        <Router>
          <Navbar
            handleCartPopUp={this.handleCartPopUp}
            handleProductsPopUp={
              this.handleProductsPopUp
            }
          />
          <br />
          <Pages>
            <Switch>
              {baseRoutes.map(route => {
                const {
                  routes,
                  exact,
                  component
                } = route;
                return (
                  <Route
                    path={routes}
                    exact={exact}
                  >
                    {route.name === "PRODUCTS"
                      ?
                        <Products 
                      selectedCategory={this.state.selectedCategory}/>
                      : component}
                  </Route>
                );
              })}
            </Switch>
          </Pages>
        </Router>
        {this.state.showCart && <CartPopUp />}
{/* 
        <FontAwesomeIcon className="Favicon"
          icon={faComments}
        /> */}
        <Footer />
      </Container>
    );
  }
}

export default App;

// this.state.showProducts &&< WaxMelts />