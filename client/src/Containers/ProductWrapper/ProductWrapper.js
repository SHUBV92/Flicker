import React from "react";
import Favourite from "../Favourite";

const ProductWrapper = ( props ) => {
  return (
    <div>
      <h1>Products</h1>
      <h2>SOY-BASED</h2>
      <p>
        Soy wax has so many benefits – it’s toxic-free. It’s natural, renewable
        and bio-degradable. It cleans up with plain old soap and water. It also
        lower melting point than normal wax, which means that my candles burn
        slower and last longer than normal candles, so you essentially get more
        candle for your money.
      </p>
      {props.children}
      <Favourite />
    </div>
  );
};
export default ProductWrapper;
