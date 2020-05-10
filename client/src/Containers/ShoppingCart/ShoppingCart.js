import React, { Component } from "react";

import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";

import Counter from "../../Components/Counter/Counter.js";
import {
  ItemCard,
  Header,
  Border
} from "./ShoppingCart.styles.jsx";

class ShoppingCart extends Component {
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
              price: item[1].price
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
    console.log(
      "Items in state",
      this.state.items[0]
    );
    return (
      <div className="display-item">
        <h2>Your Basket</h2>
        <section className="header">
          <Header>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </Header>
        </section>

        {this.state.items.map(item => {
          return (
            <ItemCard key={item.id}>
              <section className="Card">
                <h3>{item.name}</h3>

                <h3>£{item.price}</h3>

                <p>
                  Quantity :
                  <Counter counter={this.count} />
                </p>

                <p>
                  User: {item.name}
                  <button
                    onClick={() =>
                      this.removeItem(item.id)
                    }
                  >
                    X
                  </button>
                </p>
              </section>
            </ItemCard>
          );
        })}
        <Border />

        <section className="total">
          <p>
            <button onClick={this.calculateTotal}>
              Get Total: £{this.state.total}
            </button>
          </p>
          <p>Total: £{this.state.total} </p>
        </section>

        <button>Pay Now</button>
      </div>
    );
  }
}
export default ShoppingCart;
