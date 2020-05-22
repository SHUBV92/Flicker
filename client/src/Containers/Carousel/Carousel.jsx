import React, { useState } from "react";
import {
  Container,
  Slider,
  Button
} from "./Carousel.styles.jsx";
//   import ImageData from " ../../constants/imageData"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFacebookF,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  let array = [1, 2, 3, 4];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0
      ? setX(-100 * (array.length - 1))
      : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (array.length - 1)
      ? setX(0)
      : setX(x - 100);
  };

  return (
    <Container>
      {array.map((image, index) => (
        
        <Slider key={index} style={{transform: `translateX(${x}%)`}}>
          <h1>{image}</h1>
        </Slider>
        
      ))}
      <Button id="goLeft" onClick={goLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button id="goRight" onClick={goRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </Container>
  );
};
export default Carousel;
