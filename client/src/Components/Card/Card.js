import React from "react";

const Card = props => {
  return (
    <div className="App-Container">
      <ol>
        <div className="Image">
          <h3>{props.title}</h3>
          <img
            src={props.pictures}
            className={`items${index + 1}`}
          />
          <div className="info">
            <h3>Pirce: {props.price}</h3>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products Details
            </a>
          </div>
        </div>
      </ol>
    </div>
  );
};

export default Card;
