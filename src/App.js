import React from "react";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

import Favourites from "./Components/Favourites"
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";

const App = () => {
  const routes = [
    {
      name: "home",
      route: "/",
      component: "HOME",
      exact: true
    },
    {
      name: "topic",
      route: "/topic",
      component: "TOPIC"

    }
  ];

  return (
    <fragment className="App">
      <Router>
        <Favourites />
        {/* <Navbar />
        <Home /> */}
        {routes.map(v => (
          <Link to={v.route}>{v.name}</Link>
        ))}
        <Switch>
          {routes.map(s => (
            <Route exact path={s.route} exact={s.exact}>
              {s.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </fragment>
  );
};

export default App;
