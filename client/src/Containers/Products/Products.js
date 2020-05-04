import React, { Component } from "react";
import productsData from "../../products.json";
import ProductWrapper from "../../Components/ProductWrapper";
import ProductSelector from "../ProductSelector/index.js";
import firebase from 'firebase'


class Products extends Component {
  constructor() {
    super();
    this.state = {
      products : {
      name: null,
      price: null
      
      }
    };
    this.handleClick = this.handleClick.bind(this)
    this.submitFirebase = this.submitFirebase.bind(this)

  }
  
  handleClick = (returnedData) => { 
        console.log("Data from Card Comp:", returnedData)
    const data = {...this.state.products}
    const name = data.name
        console.log("State Name:", name)
    
    const price = data.price
        console.log("State Price:", price)

this.setState({products : {...this.state.products, name:returnedData[0].name}})
    // this.setState({name :returnedData[0].name, price: returnedData[0].price })

    // this.setState({this.state.products: {name :returnedData[0].name, price: returnedData[0].price }})
        // console.log("State Values", products[price]})
        // console.log({products: { name:returnedData[0].name, price: returnedData[0].price }})
    
        console.log(this.state.products)
  }
    // this.setState({products: { name:returnedData[0].name, price: returnedData[0].price }})


  submitFirebase = ()=> {
    console.log("HandleSubmit")
    // e.preventDefault();
    const itemsRef = firebase
      .database()
      .ref("items")

      const item = { 
        // name: this.state.products.name,
        name: "Lavender",
        price: "£50"
        // price: this.state.products.price
      }
      itemsRef.push(item);
      this.setState({
      products : {name: "",
      price: ""}
      })
  }

  render() {
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
                <h1>{this.state.products.name}</h1>
                <h1>{this.state.products.price}</h1>

              <div className="ProductsWrapper">
                <ProductWrapper
                  items={product.items}
                  CBFP={this.handleClick}
                  submit={this.submitFirebase}
                />
                <ProductSelector />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
