import React from "react";
import { Container, Intro, WhoWeAre } from "./home.styles.jsx";

const Home = () => (
  <Container>
    <Intro>
      <h5>
        High-end scented candles and gifts without
        the high-end price tag.
      </h5>
      <h1>LUXURY YET AFFORDABLE</h1>
      <h4>SOY-BASED</h4>
      <p>
        Soy wax has so many benefits – it’s
        toxic-free. It’s natural, renewable and
        bio-degradable. It cleans up with plain
        old soap and water. It also lower melting
        point than normal wax, which means that my
        candles burn slower and last longer than
        normal candles, so you essentially get
        more candle for your money.
      </p>
    </Intro>

    {/* Picture Carasoule */}
    {/* Products */}
    <WhoWeAre>
      <h1>Who We Are</h1>
      <h3>
        Established Fragrance and Flicker at Home
        in October 2019
      </h3>
      <p>
        Fragrance and Flicker was brought into
        this world with one single purpose – to
        provide people with luxury scented
        products without the hefty price tag.
      </p>
    </WhoWeAre>
    {/* Contact */}
  </Container>
);

export default Home;
