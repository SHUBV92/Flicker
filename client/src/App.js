import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { routes } from "./constants/routes";
import Navbar from "./Containers/Navbar";
import CartPopUp from "./Containers/CartPopUp/CartPopUp.jsx";
import { Footer } from "./Containers/Footer/Footer";
import {
  Container,
  Pages
} from "./App.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faMenorah
} from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCart: true
    };
    this.handleCartPopUp = this.handleCartPopUp.bind(
      this
    );
  }

  handleCartPopUp = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  };

  render() {
    return (
      <Container>
        <Router>
          <Navbar
            handleCartPopUp={this.handleCartPopUp}
          />
          <br />
          <Pages>
            <Switch>
              {routes.map(route => {
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
                    {component}
                  </Route>
                );
              })}
            </Switch>
          </Pages>
        </Router>
        {this.state.showCart && <CartPopUp />}
        <Footer />
      </Container>
    );
  }
}

export default App;
