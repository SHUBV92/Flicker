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
    img
  } = props.items;
  console.log("img", img);

  return (
    <CardApp>
      <img
        src={require(`../../assets/images/${img}.jpeg`)}
        // className={`items${index + 1}`}
        className="img"
        style={{width:"330px"}}
      />
      <CardContainer key={id}>
        <h3>{name}</h3>

        {/* <div className="info"> */}
        <h3>Price: £{price}</h3>
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
            props.CBFP1({ name, price });
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
