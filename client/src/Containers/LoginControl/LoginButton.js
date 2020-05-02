import React from "react";

export const LoginButton = props => {
  return (
    <button onClick={props.onClick}>Login</button>
  );
};

export const LogoutButton = props => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
};
