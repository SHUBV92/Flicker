import React from "react";
import Card from "../Card/";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./ProductsWrapper.styles.jsx"

const ProductWrapper = props => {
  return (
    <Container>
      <h3>{props.category.name}</h3>
      <div>
        {props.category.items.map(item => (
          <Card
            items={item}
            handleCartClick={
              props.handleCartClick
            }
            page={props.page}
          />
        ))}
      </div>
    </Container>
  );
};
export default ProductWrapper;
