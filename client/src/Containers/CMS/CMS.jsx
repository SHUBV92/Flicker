import React, { Component } from "react";
import {
  Container,
  Display,
  Input
} from "./CMS.styles.jsx";
import axios from "axios";

class CMS extends Component {
  constructor() {
    super();
    this.state = {
      stock: null
    };


    this.handleSubmit = this.handleSubmit.bind(
      this
    );
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ stock: event.target.value });
  };

  componentDidMount(){
    // axios
    //   .get("http://localhost1337/products")
    //   .then(function(response) {
    //     console.log("CMS Response: ",response);
    //   });


    fetch('http://localhost1337/products')
    .then(response => response.json())
    .then(data => console.log(data));
  };


  render() {
    return (
      <Container>
        <Display>
          <h1>Stock Level: {this.state.stock}</h1>
        </Display>

        <Input>
          <form>
            <input
              type="text"
              placeholder="EveningSnow"
              name="EveningSnow"
            />
            <input
              type="text"
              placeholder="Price"
              name="Price"
            />
            <button onClick={this.handleSubmit}>
              submit
            </button>
          </form>

          <form>
            <input
              type="text"
              placeholder="LavenderCandles"
              name="LavenderCandles"
            />
            <input
              type="text"
              placeholder="Price"
              name="Price"
            />
            <button onClick={this.handleSubmit}>
              submit
            </button>
          </form>

          <form>
            <input
              type="text"
              placeholder="Roses Candles"
              name="Roses Candles"
            />
            <input
              type="text"
              placeholder="Price"
              name="Price"
            />
            <button onClick={this.handleSubmit}>
              submit
            </button>
          </form>
        </Input>
      </Container>
    );
  }
}

export default CMS;
