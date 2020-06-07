import React from "react";
import Card from "../Card/";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Wrapper
} from "./ProductsWrapper.styles.jsx";

const ProductWrapper = props => {
  return (
    <Container>
      {console.log(
        "TATTI CHOR",props.prods[0].items[0].weight
      )}
      <Wrapper>
        {props.prods[0].items.map(item => (
          <Card
            items={item}
            handleCartClick={
              props.handleCartClick
            }
            page={props.page}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
export default ProductWrapper;
