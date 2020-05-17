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
