import React from "react";
import Button from "../Button/Button";

// import ShoppingCart from "../../Containers/ShoppingCart/ShoppingCart"
// import Products from "../../Containers/Products/Products"

import {
  Image,
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

  const button1 = (
    <button
      onClick={() =>
        props.page === "Products"
          ? props.handleCartClick({
              name,
              price,
              image
            })
          : props.removeItem(id)
      }
    >
      {props.page === "Products"
        ? "ADD TO CART"
        : "REMOVE ITEM"}
    </button>
  );

  //  const reducedP =  !reducedPrice ? null
  //            <s>£{reducedPrice}</s> : null;
  return (
    <CardApp>
      <Image>
        <img
          src={require(`../../assets/images/${image}.jpeg`)}
        />
      </Image>
      <CardContainer key={id}>
        <h3>{name}</h3>
        <hr />
        <h3>
          {/* Price: <s>{reducedPrice}</s>  */}
          £{price}
        </h3>
        {/* <h5>Products Details :</h5> */}
        {/* <p>{description}</p> */}
        {button1}
      </CardContainer>
    </CardApp>
  );
};

export default Card;
