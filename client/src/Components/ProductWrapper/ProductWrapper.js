import React from "react";
import Card from "../Card/";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./ProductsWrapper.styles.jsx"

const ProductWrapper = props => {
  return (
    <Container>
    {/* {if(props.category.name === props.prods ) */}
    {console.log("Products Wrapper", props.prods[0])}
      <h3>{props.prods[0].name}</h3>
      <div>
        {props.prods[0].items.map(item => (
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
