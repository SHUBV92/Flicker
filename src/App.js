import React from 'react';
import Images from './Components/Pictures'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Product from './Components/Products'

const App = () => {
  return (
   <fragment>
    <Home />
    <Product />
    <Images />
    <About />
    <Contact />
    </fragment>

  );
}

export default App;
