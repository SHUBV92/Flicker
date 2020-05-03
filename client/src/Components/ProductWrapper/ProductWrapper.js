import React from "react";
import Favourite from "../../Containers/ProductSelector";
import Card from "../Card/";

const ProductWrapper = (props) => {
  console.log("props :", props)
  const products = []
  products.push(props)

  console.log("products :", products)

  return (
    <div>
      {props.items.map(item => (
        <div>
        <Card 
        name = {item.name}
        price = {item.price} 
        />
      </div>
      ))}
    </div>
  );
  };
export default ProductWrapper;
