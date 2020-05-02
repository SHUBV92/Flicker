import React, { Component } from "react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LoginButton";

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(
      this
    );

    this.handleLogoutClick = this.handleLogoutClick.bind(
      this
    );

    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
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
      <div style={{ backgroundColor: "Blue" }}>
      <h1>Authentication</h1>
        <form>
          <p>
            <lable>Name</lable>
            <input
              type="text"
              name="name"
              placeholder="Name"
            />
          </p>
          <p>
            <lable>Password</lable>
            <input
              type="text"
              name="password"
              placeholder="Password"
            />
          </p>
        </form>

        {button}
      </div>
    );
  }
}

export default LoginControl;
