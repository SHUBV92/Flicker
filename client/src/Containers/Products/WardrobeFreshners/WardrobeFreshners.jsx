import React from "react";
import productsData from "../../../products.json";
import ProductWrapper from "../../../Components/ProductWrapper";
import firebase from "firebase";
import Card from "../../../Components/Card/Card.js";



const WardrobeFreshners= (props) => {
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
        
        <h1>Wardrobe Freshners</h1>
{/* 
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
      </div> */}

  
    </div>
  );
};

export default WardrobeFreshners;


