import React, { Component } from "react";
import productsData from "../../products.json";


class Products extends Component {
  constructor() {
    super();
    this.state = {
      products:null
    };
  }

  render(){
      return(
        <ProductsWrapper
          <div>
            {productsData.map(product => (
                  <h3>{product.name}</h3>
            ))
            }
          </div>
      )
  }
}

export default Products;
