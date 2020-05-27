import React, { useState } from "react";
import {
  Container,
  Slider,
  Button
} from "./Carousel.styles.jsx";
  import productsData from "../../products.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import Blackcurrant from "../../assets/images/Blackcurrant.jpeg"
import Bundle from "../../assets/images/Bundle.jpeg"
import Evening from "../../assets/images/evening.jpeg"
import Roses from "../../assets/images/Roses.jpeg"



const Carousel = () => {
  let array = [Blackcurrant, Bundle, Evening, Roses];

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
      {/* {productsData.map((category, index) => { */}
         {/* category.items.map((item, index) => ( */}
           {/* x.items(y => ( */}
            
            {array.map((x, index) => (
          <Slider key={index} style={{transform: `translateX(${x}%)`}}>
            <img

          // src={require(`../../assets/images/${item.image}.jpeg`)}

            />
        </Slider>
        ))
        
      })}
    </div>

            {/* Buttons */}
    
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
