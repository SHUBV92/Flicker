import React from "react";
import Button from "../Button/Button";

import {
  Image,
  CardApp,
  CardContainer
  // CartApp
} from "./Card.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faExpandAlt
} from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  const {
    id,
    name,
    price,
    image,
    weight
  } = props.items;

  const currencyFormatter = new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2
    }
  );

  const button1 = (
    <button
      onClick={() =>
        props.page === "Products"
          ? props.handleCartClick({
              name,
              price,
              image,
              weight
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
      {props.page != "CartPopUp" ? (
        <Image>
          <img
            src={require(`../../assets/NewImages/${image}.jpeg`)}
          />
          <p>
            <FontAwesomeIcon icon={faExpandAlt} />
          </p>
        </Image>
      ) : null}
      <CardContainer key={id}>
        <h3>{name}</h3>
        <hr />
        <h4>{currencyFormatter.format(price)}</h4>
        {button1}
      </CardContainer>
    </CardApp>
  );
};

export default Card;
