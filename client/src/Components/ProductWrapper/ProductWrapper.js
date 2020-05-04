import React from "react";
import firebase from "../../utils/firebase"

import Favourite from "../../Containers/ProductSelector";
import Card from "../Card/";

const ProductWrapper = props => {
  const products = "Vintage Candle";
  console.log("Props P.W", props)
  return (
    <div>
      {props.items.map(item => (
        <div>
          <Card
            item = {item}
            // id={item.id}
            // name={item.name}
            // price={item.price}
            CBFP1={props.CBFP}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductWrapper;
