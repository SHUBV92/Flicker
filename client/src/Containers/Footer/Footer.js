import React, {Link} from "react";
import {
  FooterWrapper
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <hr />
      <h3>Get Additional Info</h3>
      <li>Contact</li>
      <li>About Us</li>
      <li>Testimonials</li>
      <a
        className="App-link"
        href="https://www.instagram.com/fragranceandflicker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </FooterWrapper>
  );
};

export default Footer;
