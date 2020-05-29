import React from "react";
import { App, Header, AboutUS, Paragraph} from "./About.styles.jsx"

const About = () => {
  return (
    <App>
      <Header>About Our Ceo</Header>
      <AboutUS>
        <Paragraph>
          Established Fragrance and Flicker at
          Home in October 2019
        </Paragraph>
        <Paragraph>Supports female run business</Paragraph>
        <Paragraph>Driven and loves her own way</Paragraph>
        <Paragraph>
          "As someone who loves candles, I was fed
          up with having to choose between
          spending sp much money on fancy candles
          that smell or buyiing cheap candles that
          don't. That's why I created a brand that
          achieves both"
        </Paragraph>
      </AboutUS>

  
      <h3>
        Frangrance and Flicker - established in
        Essex in October 2019
      </h3>
      {/* <div class="container">
  <img src="../../assets/logo.js/" alt="Avatar" class="image" />
  <div class="overlay">
    <a href="#" class="icon" title="User Profile">
      <i class="fa fa-user"></i>
    </a>
  </div>
</div> */}
    </App>
  );
};
export default About;
