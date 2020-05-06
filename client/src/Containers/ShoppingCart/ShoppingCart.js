import React, { Component } from "react";

import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";
import Counter from "../../Components/Counter/Counter.js";

class ShoppingCart extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      total: 0
      // count:0
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
    
  }

  removeItem(itemId) {
    const itemsRef = firebase
      .database()
      .ref(`/items/${itemId}`);
    itemsRef.remove();
  }

  render() {
    return (
      <div className="display-item">
        <h2>Your Basket</h2>
        <section>
          <h3>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </h3>
        </section>

        {this.state.items.map(item => {
          return (
            <section>
              <div classname="item" key={item.id}>
                <ul>
                  <li>
                    <h3>{item.name}</h3>
                    <h3>£{item.price}</h3>
                    <p>
                      Counter :
                      <Counter />
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
                  </li>
                </ul>
              </div>
            </section>
          );
        })}
        <section>
          <p>Total: {this.state.total} </p>
        </section>

        <button>Pay Now</button>
      </div>
    );
  }
}
export default ShoppingCart;
