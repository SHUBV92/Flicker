import React, { Component } from "react";
import productsData from "../../products.json";
import ProductWrapper from "../../Components/ProductWrapper";
import firebase from "firebase";
import { GeneralInfo } from "./Products.styles.jsx";
import { fetchProductData } from "../CartPopUp/CartPopUp";
import WaxMelts from "./WaxMelts/WaxMelts.jsx";
import WardrobeFreshners from "./WardrobeFreshners/WardrobeFreshners.jsx";

class Products extends Component {
  constructor(props) {
    super();
    this.state = {
      clicked: null,
      showProducts: false
    };
    this.handleCartClick = this.handleCartClick.bind(
      this
    );
    this.handleClicked = this.handleClicked.bind(
      this
    );
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

  handleClicked = id => {
    this.setState({ clicked: id });
  };

  render() {
    const prods = productsData.filter(
      category =>
        category.name === this.state.products1
    );

    console.log("Prods", prods);

// const prods1
  //   (this.state.products1==="Wax Mellts")?
  //  prods1 =  <h1>Wax Melts</h1> :  <h1>Wardrobe Freshners</h1>


    return (
      <GeneralInfo>
        <h1>{this.props.products1}</h1>
        <hr />
        {productsData.map(category => (
          <ProductWrapper
            category={category}
            handleCartClick={this.handleCartClick}
            page="Products"
          />
      // {prods1}
        ))}
      </GeneralInfo>
    );
  }
}

export default Products;

// return (

//     <div>{prods.image}</div>

//   )
// this.state.products ? <div>

// const prod =
//   this.props.products1 ===
//   "Wardrobe Freshner" ? (
//     <div>Wardrobe Freshner</div>
//   ) : (
//     <div>Wax Melt</div>
//   );
