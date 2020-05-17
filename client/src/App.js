import React from "react";

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

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
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
      <CartPopUp />
      <Footer />
    </Container>
  );
};

export default App;
