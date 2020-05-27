import React from "react";
import About from "../About/About.js"
import { LinkContainer } from "react-router-bootstrap"

import { Carousel } from "react-bootstrap";
import ProductsData from "../../products.json";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const CarouselTest = () => {
  return (
      <Carousel className="border border-secondary">
      {/* {ProductsData.map(x => {
        x.items.map(image => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                // style={{width:"900px", height: "900px"}}
                src={require(`../../assets/images/${image.image}.jpeg`)}
                alt="Twice Slide"
              />
              <Carousel.Caption>
                <h3>{image.name}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        });
      })} */}
    

      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{width:"900px", height: "900px"}}
          src={require(`../../assets/images/Roses.jpeg`)}
          alt="Twice Slide"
        />
        <Carousel.Caption>
        {/* <LinkContainer to="/about"> */}

          <h3>Wax Melts</h3>
          <p>Evening Snow</p>
        {/* </LinkContainer> */}

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          // style={{width:"900px", height: "900px"}}
          src={require(`../../assets/images/lavenderSoy.jpeg`)}
          alt="Twice Slide"
        />
        <Carousel.Caption>
          <h3>Wardrobe Freshners</h3>
          <p>Evening Snow</p>
        </Carousel.Caption>
      </Carousel.Item>

    {/* </Router>
    <Switch>
        <Route path="/about">
            <About />
        </Route>
    </Switch> */}
    </Carousel>
  );
};

export default CarouselTest;

{
  /* <div class="border border-secondary">Surrounded by border</div> */
}
