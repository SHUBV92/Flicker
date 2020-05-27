import React, { Component } from "react";
import productsData from "../../products.json";
import ProductWrapper from "../../Components/ProductWrapper";
import firebase from "firebase";
import { GeneralInfo } from "./Products.styles.jsx";
import { fetchProductData } from "../CartPopUp/CartPopUp";
import WaxMelts from "./WaxMelts/WaxMelts.jsx";
import WardrobeFreshners from "./WardrobeFreshners/WardrobeFreshners.jsx";

class Products extends Component {
  constructor() {
    super()
    this.state = {
      clicked:null
    };
    this.handleCartClick = this.handleCartClick.bind(this)
    this.handleClicked = this.handleClicked.bind(this)

  }

  handleCartClick = data => {
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


  handleClicked = (id) => { 
    this.setState({clicked: id})
  }


  render() {
    return (
      <div>
        <h1>Products</h1>
        <hr />

        {productsData.map(category => (
          <div>
            <ProductWrapper
              category={category}
              handleCartClick={this.handleCartClick}
              page="Products"
            />

            <WaxMelts
              category={
                category.name === "Candles"
                  ? category.items
                  : null
              }
              handleCartClick={this.handleCartClick}
              page="Products"
            />
            {/* <WardrobeFreshners 
          category={category}
          handleCartClick={handleCartClick}
          page="Products"
      /> */}

      <button onClick={this.handleClicked}>click me</button>
          <h1>{this.state.clicked}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;





// if (this.state.clicked === "Wax Melts"){
//     render Component
// }