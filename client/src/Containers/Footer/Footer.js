import React from "react";
import {Link, Border, Foot, Header, List} from "./Footer.styles"


export const Footer = () => {
  return (
    <Foot>
      {/* <Border /> */}
      <Header>Get Additional Info</Header>

        <List>Contact</List>
        <List>About Us</List>
        <List>Testimonials</List>
        
          <Link
                className="App-link"
                href="https://www.instagram.com/fragranceandflicker/"
                target="_blank"
                rel="noopener noreferrer"
              >instagram</Link>


    </Foot>
  );
};
