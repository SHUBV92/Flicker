import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { routes } from "./constants/routes";

import Navbar from "./Containers/Navbar";
import { Footer } from "./Containers/Footer/Footer";
import Products from "./Containers/Products/Products";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {routes.map(route => {
            const {
              routes,
              exact,
              component
            } = route;
            return (
              <Route path={routes} exact={exact}>
                {component}
              </Route>
            );
          })}
        </Switch>
      </Router>
      <Products />
      <Footer />
    </div>
  );
};

export default App;
