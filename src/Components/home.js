import React from "react";
import Images from "../Components/Pictures";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Product from "../Components/Products";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <h1>Fragrance & Flicker</h1>
      <h2>
        High-end scented candles and gifts without
        the high-end price tag.
      </h2>
      <h1>LUXURY YET AFFORDABLE</h1>
      <p>
        Fragrance and Flicker was brought into
        this world with one single purpose – to
        provide people with luxury scented
        products without the hefty price tag.
      </p>
      <Product />
      <Images />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
