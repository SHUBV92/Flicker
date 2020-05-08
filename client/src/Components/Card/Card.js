import React from "react";
import Button from "../Button/Button";

const Card = props => {
  const { id, name, price, img } = props.items;

  return (
    <div className="App-Container">
      <ol>
        <div className="Image" key={id}>
          <h3>{name}</h3>
          <img
            src={require(img)}
            // className={`items${index + 1}`}
            className="img"
          />
          {/* <div className="info"> */}
          <h3>Price: £{price}</h3>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Products Details
          </a>
          <button
            onClick={() => {
              props.CBFP1({ name, price });
            }}
          >
            Add to Cart
          </button>
          {/* </div> */}
        </div>
      </ol>
    </div>
  );
};

export default Card;
