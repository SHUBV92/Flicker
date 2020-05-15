import React from "react";
import Card from "../Card/";

const ProductWrapper = props => {
  return (
    <div>
      <h3>{props.category.name}</h3>
      {props.category.items.map(item => (
          <Card
            items={item}
            handleCartClick={props.handleCartClick}
          />
      ))}
    </div>
  );
};
export default ProductWrapper;
