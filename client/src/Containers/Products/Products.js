import React, { Component } from "react";
import productsData from "../../products.json";
import ProductWrapper from "../../Components/ProductWrapper";
// import ProductSelector from "../ProductSelector/index.js";
import firebase from "firebase";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      price: null,
      description: null
    };
  }

  handleClick = returnedData => {
    console.log(
      "ReturnedData:",
      returnedData.name
    );

    const itemsRef = firebase
      .database()
      .ref("items");

    const item = {
      name: returnedData.name,
      price: returnedData.price
    };
    itemsRef.push(item);
  };

  render() {
    console.log("State", this.state);

    return (
      <div class="App">
        <section>
          <h1>Products</h1>
          <h2>SOY-BASED</h2>
          <p>
            Soy wax has so many benefits – it’s
            toxic-free. It’s natural, renewable
            and bio-degradable. It cleans up with
            plain old soap and water. It also
            lower melting point than normal wax,
            which means that my candles burn
            slower and last longer than normal
            candles, so you essentially get more
            candle for your money.
          </p>
        </section>
        <div>
          {productsData.map(product => (
            <div className="Container">
              <h3>{product.name}</h3>
              <h1>{this.state.name}</h1>
              <h1>{this.state.price}</h1>

              <div className="ProductsWrapper">
                <ProductWrapper
                  items={product.items}
                  CBFP={this.handleClick}
                  submit={this.submitFirebase}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
