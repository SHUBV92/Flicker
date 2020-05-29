import React from "react";
import productsData from "../../../products.json";
import ProductWrapper from "../../../Components/ProductWrapper";
import firebase from "firebase";
// import { GeneralInfo } from "./Products.styles.jsx";
// import { fetchProductData } from "../CartPopUp/CartPopUp";

const WaxMelts = () => {
  // const handleCartClick = data => {
  //   const itemsRef = firebase
  //     .database()
  //     .ref("items");

  //   const item = {
  //     name: data.name,
  //     price: data.price,
  //     image: data.image
  //   };
  //   itemsRef.push(item);
  // };

  return (
    <div>
      {/* <GeneralInfo>
    </GeneralInfo> */}
    <h1>Wax Melts</h1>
      {/* {productsData.map(category => (
        <ProductWrapper
          category={category}
          handleCartClick={handleCartClick}
          page="Products"
        />
      ))} */}

      <p>This is a placeholder page for Wax melts </p>
  
    </div>
  );
};

export default WaxMelts;


