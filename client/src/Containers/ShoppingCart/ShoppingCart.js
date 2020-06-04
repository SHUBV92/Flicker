import React, { Component } from "react";
import StripeCheckoutButton from "../Stripe/Stripe-button";
import Card from "../../Components/Card/Card"

import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";

import Counter from "../../Components/Counter/Counter.js";
import {
  CartDisplay,
  ItemCard,
  Header,
  Checkout,
  Description
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
      <CartDisplay>
        <Header>
          <h3>My Basket</h3>
          <hr />
        </Header>

        {this.state.items.map(item => {
          return (
            
            <Card 
            items={item}
            // total={this.calculateTotal}
            removeItem ={this.removeItem}
            page="ShoppingCart"


            />

            // <ItemCard key={item.id}>
            //   <img
            //     src={require(`../../assets/images/${item.image}.jpeg`)}
            //     className="img"
            //     style={{ width: "150px" }}
            //   />
            //   <Description>
            //     <h3>{item.name}</h3>
            //     <h3>£{item.price}</h3>
            //     <p>
            //       Quantity :
            //       <Counter counter={this.count} />
            //     </p>
            //     <p>
            //       User: {item.name}
            //       <button
            //         onClick={() =>
            //           this.removeItem(item.id)
            //         }
            //       >
            //         X
            //       </button>
            //     </p>
            //   </Description>
            // </ItemCard>
          );
        })}



        <Checkout>
          <div>
            <p>
              <button
                onClick={this.calculateTotal}
              >
                Get Total: £{this.state.total}
              </button>
            </p>

            <h5>Subtotal : £{this.state.total} </h5>
            <br />
            <h5>Shipping : £10</h5>

            <hr />
            <p>Total: £{this.state.total} </p>

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
