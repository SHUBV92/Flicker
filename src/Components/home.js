import React from "react";
import Images from "./Pictures";
import Contact from "./Contact";
import About from "./About";
import Product from "./Products";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="App">
    <Navbar />
<div>
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
    </div>
  );
};

export default Home;
