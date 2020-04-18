import React, { Component } from "react";
import firebase, {
  provider,
  auth
} from "../firebase.js";
import "./Favourite.css";

class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      user: null
    };
    this.handleChange = this.handleChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(
      this
    );
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(
      "a",
      e.target.name,
      "b",
      e.target.value
    );
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  // Handle the submission of the form to Firebase

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase
      .database()
      .ref("items");

    const item = {
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    console.log("items-Ref-2 : ", itemsRef);
    this.setState({
      currentItem: "",
      username: ""
    });
  }

  //   Grab Items from Firebase when starting the Component

  componentDidMount() {
    const itemsRef = firebase
      .database()
      .ref("items");

    console.log("itemsRef: ", itemsRef);

    itemsRef.on(
      "value",
      snapshot => {
        console.log("snapshot: ", snapshot);

        let items1 = snapshot.val();
        console.log("Recieving items: ", items1);

        const itemsArray =
          items1 && Object.entries(items1);
        console.log(itemsArray);
        console.log("Items Array : ", itemsArray);

        let newState = [];

        itemsArray&&itemsArray.map(item => {
          newState.push({
            id: item[0],
            title: item[1].title,
            user: item[1].user
          });
        });

        // ['hello', 'bye', ['mongolia']]

        // items.map (item => [['493248394343ekjflea', [title: 'Betch', name: 'Shubs']]]

        // for(let [key, value] of Object.enteries(itemsArray))

        // for (let item in items1) {
        //   newState.push({
        //     id: items1[item].id,
        //     title: items1[item].title,
        //     user: items1[item].user
        //   });
        // }
        this.setState({
          items: newState
        });
      },
      error => {
        console.error("Error: ", error);
      }
    );
    console.log(
      "Updated Items",
      this.state.items
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
      <div className="app">
        <header>
          <div className="wrapper1">
            <h1>Favourite Candles</h1>
            {this.state.user ? (
              <button onClick={this.logout}>
                Log Out
              </button>
            ) : (
              <button onClick={this.login}>
                Log In
              </button>
            )}
          </div>
        </header>

        <div className="container">
          <section className="add-item">
            <form>
              <input
                type="text"
                name="username"
                placeholder="Whats your name"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="Your Favourite Candle's"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <button onClick={this.handleSubmit}>
                Add Candle
              </button>
            </form>
          </section>
          <section className="display-item">
            {this.state.items.map(item => {
              return (
                <div
                  className="wrapper2"
                  key={item.id}
                >
                  <ul>
                    <li>
                      <h3>{item.title}</h3>
                      <p>
                        User: {item.user}
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
          </section>
        </div>
      </div>
    );
  }
}
export default Favourites;
