import React from "react";
import { imageData } from "../../constants/imageData";

import "./pictures.css";
import ProductWrapper from "../../Components/ProductWrapper/ProductWrapper";

const Images = () => {
  return (
    <div className="App-Container">
      <ProductWrapper>
      {imageData.map((picture, index) => (
        <ol>
          <div className="Image">
            <h3>Fragrance & Flicker</h3>
            <img src={picture} className={`item${index + 1}`} />
            <div classname="Info">
              <h3>Price: £400</h3>
              <a
                className="App-link"
                href="https://unolusso.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Product Details
              </a>
            </div>
          </div>
        </ol>
      ))}
      </ProductWrapper>
    </div>
  );
};

export default Images;
