import React from "react";
import cassis from "../images/cassis.jpeg";
import eveningSnow from "../images/eveningSnow.jpeg";
import lime from "../images/lime.jpeg";
import freshLinen from "../images/freshLinen.jpeg";
import instaPage from "../images/instaPage.jpeg";
import lavender from "../images/lavender.jpeg";
import competitor from "../images/competitor.jpeg";
import Blackcurrant from "../images/Blackcurrant.jpeg";
import "./Pictures.css"

const Images = () => {
  return (
    <div className="App-Container">
  
     <li>
      <img src={cassis} className="item1"    />
      <img src={eveningSnow} className="item2" />
      <img src={lime} className="item3" />
      <img src={freshLinen} className="item4" />
      <img src={lavender} className="item5" />
      <img src={competitor} className="item6" />
      <img src={Blackcurrant} className="item7" />
      <img src={instaPage} className="item8" />
    </li>

      <h1>Fragrance & Flicker</h1>
      <a
        className="App-link"
        href="https://unolusso.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default Images;
