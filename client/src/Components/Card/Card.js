import React from "react";
import Button from "../Button/Button";

const Card = props => {

  const {id, name, price} = props.item
console.log("ID",props)
  
const click = () => {
  const products = [{ name: name, 
    price: price}]

    console.log(products)
    
    props.CBFP1(products)
    props.submit

    }
   
  return (
    <div className="App-Container">
      <ol>
        <div className="Image" key={id}>
          <h3>{name}</h3>
          {/* <img
            src={props.pictures}
            // className={`items${index + 1}`}
          /> */}
          {/* <div className="info"> */}
            <h3>Price: {price}</h3>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products Details
            </a>
            <button
                onClick={click}>Add to Cart</button>
          {/* </div> */}
        </div>
      </ol>
    </div>
  );
};

export default Card;
