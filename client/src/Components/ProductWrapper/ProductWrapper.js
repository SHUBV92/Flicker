import React from "react";
import Card from "../Card/";

const ProductWrapper = props => {
  return (
    <div>
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
    </div>
  );
};
export default ProductWrapper;
