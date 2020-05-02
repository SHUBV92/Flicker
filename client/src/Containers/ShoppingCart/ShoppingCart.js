import React, { Component } from "react";

import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";

class ShoppingCart extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      total: null
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
              title: item[1].title,
              user: item[1].user
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
            {this.state.items.map(item => {
              return (
                <div classname="item"
                key={item.id}>
                  <ul>
                    <li>
                      <h3>{item.title}</h3>
                      <p>User: {item.user}
                      <button
                          onClick={() =>
                            this.removeItem(
                              item.id
                            )
                          }
                        >
                          Remove Item
                        </button>
                      </p>
                    </li>
                  </ul>
                </div>
              );
            })}

      </div>
    );
  }
}
export default ShoppingCart;


  
