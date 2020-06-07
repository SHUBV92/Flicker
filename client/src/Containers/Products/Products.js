import React, { Component } from "react";
import productsData from "../../products.json";
import ProductWrapper from "../../Components/ProductWrapper";
import firebase from "firebase";
import { GeneralInfo } from "./Products.styles.jsx";
import { fetchProductData } from "../CartPopUp/CartPopUp";
import WaxMelts from "./WaxMelts/WaxMelts.jsx";
import WardrobeFreshners from "./WardrobeFreshners/WardrobeFreshners.jsx";

const Products = props => {
  const handleCartClick = data => {
    const itemsRef = firebase
      .database()
      .ref("items");

    const item = {
      name: data.name,
      price: data.price,
      image: data.image,
      weight: data.weight

    };
    itemsRef.push(item);
  };

  const prods = productsData.filter(
    category =>
      props.selectedCategory === category.name
  );

  return (
    <GeneralInfo>
      <h5>Only shipping to the UK</h5>
      <h1>{props.selectedCategory}</h1>
      <hr />
      <ProductWrapper
        handleCartClick={handleCartClick}
        page="Products"
        prods={prods}
      />
    </GeneralInfo>
  );
};

export default Products;
