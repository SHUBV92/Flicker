import React from "react";
import Button from "../Button/Button";

// import ShoppingCart from "../../Containers/ShoppingCart/ShoppingCart"
// import Products from "../../Containers/Products/Products"

import {
  Image,
  CardApp,
  CardContainer,
  // CartApp
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

      // const Style = (
      //   props.page === "Products"
      //   ? <CardApp/> : 
      //   <CartApp/>
      // )

  //  const reducedP =  !reducedPrice ? null
  //            <s>£{reducedPrice}</s> : null;
  return (
    <CardApp>
      {(props.page != "CartPopUp") ?
      <Image>
        <img
          src={require(`../../assets/images/${image}.jpeg`)}
        />
      </Image>
    : null}
      <CardContainer key={id}>
        <h2>{name}</h2>
        <hr />
        <h3>
          £{price}
        </h3>
        {button1}
      </CardContainer>
    </CardApp>
  );
};

export default Card;
