import React, { Component } from "react";
import StripeCheckoutButton from "../Stripe/Stripe-button";
import Card from "../../Components/Card/Card";
import { Spinner } from "react-bootstrap";

import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";

import Counter from "../../Components/Counter/Counter.js";
import {
  CartDisplay,
  ItemCard,
  Header,
  Checkout
} from "./ShoppingCart.styles.jsx";

class ShoppingCart extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      count: 0,
      weight: 10,
      weightCharge: 0,
      total: 0,
      subtotal: 0
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
              image: item[1].image,
              weight: item[1].weight
            });
          });

        this.setState({
          items: newState
        });
      },
      error => {
        console.error("Error: ", error);
      }
    );
  }

  calculateWeight = () => {
    const items = this.state.items.map(item => {
      return item.weight;

      console.log("item.weight", item.weight);
    });

    const reducer = (acc, cur) => acc + cur;

    const weight1 = items.reduce(reducer);

    if (weight1 >= 500) {
      this.setState({ weightCharge: 3 });
    }
    if (weight1 === 5000) {
      this.setState({ weightCharge: 5 });
    }
    if (weight1 === 8000) {
      this.setState({ weightCharge: 10 });
    }

    this.setState({ weight: weight1 });

    this.counter();
  };

  calculateTotal = () => {
    const items = this.state.items.map(item => {
      return item.price;
    });

    const reducer = (acc, cur) => acc + cur;

    const sum = items.reduce(reducer);

    this.setState({ total: sum });

    console.log(this.state.weightCharge)
    
    const subtotal = sum + this.state.weightCharge
    this.setState({ total: subtotal });

    this.counter();
  };

  
  counter = returnedData => {
    this.setState({ returnedData });
  };

  removeItem(itemId) {
    const itemsRef = firebase
      .database()
      .ref(`/items/${itemId}`);
    itemsRef.remove();
  }

  render() {
    return (
      <CartDisplay>
        <Header>
          <h3>My Basket</h3>
          <hr />
        </Header>

        {this.state.items.length === 0 ? (
          <Spinner
            animation="border"
            variant="warning"
            style={{ marginLeft: "500px" }}
          />
        ) : (
          this.state.items.map(item => {
            return (
              <Card
                items={item}
                removeItem={this.removeItem}
                page="ShoppingCart"
              />
            );
          })
        )}

        <Checkout>
          <div>
            {/* <p><i class="fa fa-spinner w3-spin" style="font-size:64px"></i></p> */}
            <p>
              <button
                onClick={this.calculateTotal}
              >
                Get Total: £{this.state.total}
              </button>
              <button
                onClick={this.calculateWeight}
              >
                Get Weight: {this.state.weight}g
              </button>
            </p>

            <h5>
              Subtotal : £{this.state.total}{" "}
            </h5>
            <br />
            <h5>
              Total Weight : {this.state.weight}g
            </h5>

            <hr />
            <p>
              Total: £
              {this.state.total +
                this.state.weightCharge}{" "}
            </p>

            <StripeCheckoutButton
              price={this.state.total}
            />
          </div>
        </Checkout>
      </CartDisplay>
    );
  }
}
export default ShoppingCart;

//  if(weight === 2Kg){
//   charge £3
// }

//  if(weight === 5Kg){
//   charge £5
// }
