import React from "react";
import productsData from "../../products.json";
import ProductWrapper from "../../Components/ProductWrapper";
import firebase from "firebase";
import { GeneralInfo } from "./Products.styles.jsx";

const Products = () => {
  const handleCartClick = data => {
    const itemsRef = firebase
      .database()
      .ref("items");

    const item = {
      name: data.name,
      price: data.price,
      image: data.image
    };
    itemsRef.push(item);
  };

  return (
    <div>
      <GeneralInfo>
        <h1>Products</h1>
        <h2>SOY-BASED</h2>
        <p>
          Soy wax has so many benefits – it’s
          toxic-free. It’s natural, renewable and
          bio-degradable. It cleans up with plain
          old soap and water. It also lower
          melting point than normal wax, which
          means that my candles burn slower and
          last longer than normal candles, so you
          essentially get more candle for your
          money.
        </p>
      </GeneralInfo>
      {productsData.map(category => (
        <ProductWrapper
          category={category}
          handleCartClick={handleCartClick}
        />
      ))}
    </div>
  );
};

export default Products;
