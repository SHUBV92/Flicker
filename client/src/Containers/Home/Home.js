import React from "react";
import {
  Title,
  Intro,
  Head,
  App
} from "./home.styles.jsx";

const Home = () => (
  <div>
    <App>
      <Title>Fragrance & Flicker</Title>
      <hr />
      <h3>
        Established Fragrance and Flicker at Home
        in October 2019
      </h3>
      <h4>
        High-end scented candles and gifts without
        the high-end price tag.
      </h4>
      <h1>LUXURY YET AFFORDABLE</h1>
      <p>
        Fragrance and Flicker was brought into
        this world with one single purpose – to
        provide people with luxury scented
        products without the hefty price tag.
      </p>
    </App>
    {/* Picture Carasoule */}
    {/* Products */}
    <Intro>
      <Head>Who We Are</Head>
    </Intro>
    {/* Contact */}
  </div>
);

export default Home;
