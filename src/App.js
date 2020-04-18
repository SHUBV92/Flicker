import React from "react";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

import Favourites from "./Components/Favourites"
// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Form from './Components/Test/Form'

const App = () => {

  return (
    <fragment className="App">
      <Router>
        <Navbar /> 
        <hr />
        <Favourites /> 
        <Form />
      </Router>
    </fragment>
  );
};

export default App;
