import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { Container } from "./CartPopUp.styles.jsx";
import "./CartPopUp.styles.js";
import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";

import { Test } from "./CartPopUp.styles";
import { Card } from "react-bootstrap";

class CartPopUp extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      total: 0,
      count: 0
    };
  }

  componentDidMount() {
    const itemsRef = firebase
      .database()
      .ref("items");

    console.log("ItemsRef: ", itemsRef);

    itemsRef.on(
      "value",
      snapshot => {
        let items1 = snapshot.val();
        console.log("A", items1);
        const itemsArray =
          items1 && Object.entries(items1);

        let newState = [];

        itemsArray &&
          itemsArray.map(item => {
            newState.push({
              id: item[0],
              name: item[1].name,
              price: item[1].price,
              image: item[1].image
            });
          });
        console.log("B", newState);

        this.setState({
          items: newState
        });
      },
      error => {
        console.error("Error: ", error);
      }
    );
  }

  calculateTotal = () => {
    const items = this.state.items.map(item => {
      return item.price;
    });

    const reducer = (acc, cur) => acc + cur;

    const sum = items.reduce(reducer);

    this.setState({ total: sum });

    this.counter();
  };

  // fetchProductData = data => {
  //   setTotal(data);
  // };

  render() {
    return (
      <Test>
        <ul>
          <li>
            <span> Cart</span>
            {/* Selected Item Card */}
            {this.state.items.map(item => {
              return (
                <div>
                  <hr />

                  <Card 
                  neame = {item.name}
                  price = {item.price}
                  page ="CartPopUp"/>
                  {/* <p>{item.name}</p>
                  <p>{item.price}</p> */}
                </div>
              );
            })}
            <h2>Subtotal: {this.state.total}</h2>
            <h2>total</h2>
            <a href="/cart">
              {/* <NavLink> */}
              <button>View Cart</button>
              {/* </NavLink> */}
            </a>
          </li>
        </ul>
      </Test>
      // <Test>TEST</Test>
    );
  }
}
export default CartPopUp;
