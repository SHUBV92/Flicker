import React from 'react';
import Images from './Components/Pictures'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Product from './Components/Products'
import Navbar from'./Components/Navbar'

import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

import Navigation from '../Navigation';
// import './App.css/'

const App = () => {
  return (
   <fragment className="App">
    <Router >
      <Navbar />
    </Router>
    <Home />
    <Product />
    <Images />
    <About />
    <Contact />
    </fragment>

  );
}

export default App;
