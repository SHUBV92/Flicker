import React, { useState } from "react";
import {
  Container,
  Slider,
  Button
} from "./Carousel.styles.jsx";
  import productsData from "../../products.json";

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
      <div>
      {productsData.map((category, index) => {
        category.items.map((x) => (
          // x.items(y => (
          <Slider key={index} style={{transform: `translateX(${x}%)`}}>
            <img
          src={require(`../../assets/images/${x.image}.jpeg`)}
            // {console.log("Image in Carousel", x.image)}
            />
        </Slider>
        ))
        
      })}
    </div>

    
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
