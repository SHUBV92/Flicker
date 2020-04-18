import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const topics = [
  {
    name: "React Router",
    id: "react-router"
  }
];

class Route extends Component {
  render() {
    return <Router></Router>;
  }
}
