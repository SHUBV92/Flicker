import React, { useState, useEffect } from "react";
import StripeCheckoutButton from "../Stripe/Stripe-button";
import Card from "../../Components/Card/Card";
import { Spinner } from "react-bootstrap";
import firebase, { provider,auth } from "../../utils/firebase.js";
import Counter from "../../Components/Counter/Counter.js";
import { CartDisplay, Header, Checkout } from "./ShoppingCart.styles.jsx";

const ShoppingCart = () => {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)
  const [weight, setWeight] = useState(10)
  const [weightCharge, setWeightCharge] = useState(0)
  const [total, setTotal] = useState(0)
  const [subTotal, setSubTotal] = useState(0)


  // Start the Firebase and retireve data saved in the Database
  useEffect(()=> {
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

        setItems(newState);
      },
      error => {
        console.error("Error: ", error);
      }
    );
    }, [])

    // Calculate the total weight of items 
  const calculateWeight = () => {
    const productItems = items.map(item => {
      return item.weight;
    });

    const reducer = (acc, cur) => acc + cur;

    const weight1 = productItems.reduce(reducer);
    console.log("Product Items", productItems)
    console.log("Product Items", weight1)

    if (weight1 >= 500) {
      setWeightCharge(3);
    }
    if (weight1 >= 5000) {
      setWeightCharge(5);
    }
    if (weight1 >= 8000) {
      setWeightCharge(10);
    }
    setWeight(weight1);
    console.log("WeightCharge", weightCharge)
    counter();
  };

  const calculateTotal = () => {
    const productItems = items.map(item => {
      return item.price;
    });

    const reducer = (acc, cur) => acc + cur;

    const sum = productItems.reduce(reducer);
      setTotal(sum);

    const subtotal =
      sum + weightCharge;
      setSubTotal( subtotal );
      counter();
  };

  const counter = returnedData => {
    setCount( returnedData );
  };

  const removeItem = (itemId) => {
    const itemsRef = firebase
      .database()
      .ref(`/items/${itemId}`);
    itemsRef.remove();
  }

    const currencyFormatter = new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2
      }
    );
    return (
      <CartDisplay>
        <Header>
          <h3>My Basket</h3>
          <hr />
        </Header>

        {items.length === 0 ? (
          <Spinner
            animation="border"
            variant="warning"
            style={{ marginLeft: "500px" }}
          />
        ) : (
          items.map(item => {
            return (
              <Card
                items={item}
                removeItem={removeItem}
                page="ShoppingCart"
              />
            );
          })
        )}

        <Checkout>
          <div>
            <p>
              <button
                onClick={calculateTotal}
              >
                Get Total: {currencyFormatter.format(total)}
              </button>
              <button
                onClick={calculateWeight}
              >
                Get Weight: {weight}g
              </button>
            </p>

            <h5> Total Weight : {weight}g </h5>
            <h5> Total : £{total} </h5>
            <br />
            <h5>
              Shipping Cost : £
              {weightCharge}
            </h5>
            <hr />
            <p>
              Subtotal: £
              {total +
                weightCharge}
            </p>

            <StripeCheckoutButton
              price={total}
            />
          </div>
        </Checkout>
      </CartDisplay>
    );
  }

export default ShoppingCart;




  //   this.state = {
  //     items: [],
  //     count: 0,
  //     weight: 10,
  //     weightCharge: 0,
  //     total: 0,
  //     subtotal: 0
  //   };
  // }
