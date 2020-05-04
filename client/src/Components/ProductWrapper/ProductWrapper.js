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

            submit={props.submit}

            CBFP1={props.CBFP}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductWrapper;
