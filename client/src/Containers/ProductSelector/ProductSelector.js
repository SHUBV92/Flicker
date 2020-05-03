import React, { Component } from "react";
import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";
// import "./Favourite.css";

class ProductSelector extends Component {
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
// Login Functionality
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

  // Logout Functionality
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
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

  componentDidMount(){
    auth.onAuthStateChanged((user) => { 
      if(user) {
        this.setState({user})
      }
    })
  }

  render() {
    return (
      <div className="app">
        <header>
          {/* Login Functionality  */}
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

        {/* Add a new Candle */}
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
        </div>
      </div>
    );
  }
}
export default ProductSelector;













  //   Grab Items from Firebase when starting the Component
  
// Working Code -------------------->

  // componentDidMount() {
  //   const itemsRef = firebase
  //     .database()
  //     .ref("items");

  //   console.log("itemsRef: ", itemsRef);

  //   itemsRef.on(
  //     "value",
  //     snapshot => {
  //       let items1 = snapshot.val();

  //       const itemsArray =
  //         items1 && Object.entries(items1);

  //       let newState = [];

  //       itemsArray &&
  //         itemsArray.map(item => {
  //           newState.push({
  //             id: item[0],
  //             title: item[1].title,
  //             user: item[1].user
  //           });
  //         });

// Working Code -------------------->


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

  // Working Code -------------------->
  //       this.setState({
  //         items: newState
  //       });
  //     },
  //     error => {
  //       console.error("Error: ", error);
  //     }
  //   );
  // }
        // Working Code -------------------->
