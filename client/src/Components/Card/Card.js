import React from "react";
import Button from "../Button/Button";

import {
  CardApp,
  CardContainer
} from "./Card.styles";

const Card = props => {
  const {
    id,
    name,
    price,
    description,
    image,
    reducedPrice
  } = props.items;

  return (

 
//  const reducedP =  !reducedPrice ? null
//            <s>£{reducedPrice}</s> : null;
        
        

    <CardApp>
      <img
        src={require(`../../assets/images/${image}.jpeg`)}
        // className={`items${index + 1}`}
        className="img"
        style={{width:"330px"}}
      />
      <CardContainer key={id}>
        <h3>{name}</h3>
          <hr />


        {/* <div className="info"> */}
        <h3>Price: <s>{reducedPrice}</s> £{price}</h3>
              {/* <h4>Previous reduced price : <s>£20</s></h4> */}
        
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Products Details :</h4>
          <p>{description}</p>
        </a>
        <button
          onClick={() => {
            props.CBFP1({ name, price, image });
          }}
        >
          Add to Cart
        </button>
        {/* </div> */}
      </CardContainer>
    </CardApp>
  );
};

export default Card;
