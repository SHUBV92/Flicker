import React, { Component } from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LoginButton";
import Form from "../../Components/Form/Form";
import firebase, {
  provider,
  auth
} from "../../utils/firebase.js";

class LoginControl extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      username: "",
      user: null
    };

    this.handleLoginClick = this.handleLoginClick.bind(
      this
    );
    this.handleLogoutClick = this.handleLogoutClick.bind(
      this
    );
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  // Conditional Rendering
  // Firebase Login Functionality

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;

        user.setState({});
      });
  }

  // Firebase Logout Functionality

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn && this.state.user) {
      button = (
        <LogoutButton
          onClick={this.handleLogoutClick}
        />
      );
    } else {
      button = (
        <LoginButton
          onClick={this.handleLoginClick}
        />
      );
    }
    return (
      <div >
        <h1>Authentication</h1>
        <Form />
        {button}
      </div>
    );
  }
}

export default LoginControl;
